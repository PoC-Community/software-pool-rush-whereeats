// ignore_for_file: library_private_types_in_public_api, depend_on_referenced_packages

import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';
import 'package:mobile_app/model/use.dart';
import 'package:mobile_app/utils/user_preferences.dart';
import 'package:mobile_app/widget/appbar_widget.dart';
import 'package:mobile_app/widget/button_widget.dart';
import 'package:mobile_app/widget/profile_widget.dart';
import 'package:mobile_app/widget/textfield_widget.dart';
import 'package:path/path.dart';

class EditProfilePage extends StatefulWidget {
  const EditProfilePage({super.key});

  @override
  _EditProfilePageState createState() => _EditProfilePageState();
}

class _EditProfilePageState extends State<EditProfilePage> {
  late User user;

  @override
  void initState() {
    super.initState();

    user = UserPreferences.getUser();
  }

  @override
  Widget build(BuildContext context) => Builder(
        builder: (context) => Scaffold(
          appBar: buildAppBar(context),
          body: ListView(
            padding: const EdgeInsets.symmetric(horizontal: 32),
            physics: const BouncingScrollPhysics(),
            children: [
              ProfileWidget(
                imagePath: user.imagePath,
                isEdit: true,
                onClicked: () async {
                  final image =
                      await ImagePicker().getImage(source: ImageSource.gallery);

                  if (image == null) return;

                  final directory = await getApplicationDocumentsDirectory();
                  final name = basename(image.path);
                  final imageFile = File('${directory.path}/$name');
                  final newImage = await File(image.path).copy(imageFile.path);

                  setState(() => user = user.copy(imagePath: newImage.path));
                },
              ),
              const SizedBox(height: 24),
              TextFieldWidget(
                label: 'Full Name',
                text: user.name,
                onChanged: (name) => user = user.copy(name: name),
              ),
              const SizedBox(height: 24),
              TextFieldWidget(
                label: 'Email',
                text: user.email,
                onChanged: (email) => user = user.copy(email: email),
              ),
              const SizedBox(height: 24),
              TextFieldWidget(
                label: 'About',
                text: user.about,
                maxLines: 5,
                onChanged: (about) => user = user.copy(about: about),
              ),
              const SizedBox(height: 24),
              ButtonWidget(
                text: 'Save',
                onClicked: () {
                  UserPreferences.setUser(user);
                  Navigator.of(context).pop();
                },
              ),
            ],
          ),
        ),
      );
}
