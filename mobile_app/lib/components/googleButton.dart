// ignore_for_file: file_names

import 'package:flutter/material.dart';
import 'package:fluttericon/font_awesome_icons.dart';

class SignUpButtonGoogle extends StatelessWidget {
  const SignUpButtonGoogle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ButtonStyle signUpGoogleBtnStyle = ElevatedButton.styleFrom(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(30.0),
        ),
        minimumSize: const Size(70, 40),
        maximumSize: const Size(70, 40),
        backgroundColor: Colors.blue,
        side: const BorderSide(color: Colors.grey, width: 2.0));

    return SizedBox(
      width: 300.0,
      height: 50.0,
      child: ElevatedButton(
        onPressed: () {
          // Add Google Sign In
        },
        style: signUpGoogleBtnStyle,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const <Widget>[
            Icon(
              FontAwesome.google,
              color: Colors.white,
              size: 18.0,
            ),
            SizedBox(width: 8.0),
            Text(
              'Continue with Google',
              style: TextStyle(
                color: Colors.white,
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
