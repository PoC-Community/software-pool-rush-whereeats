//import "package:flutter/material.dart";
//import 'pages/home.dart';

//void main() => runApp(const MySpotify());

//class MySpotify extends StatelessWidget {
//  const MySpotify({super.key});

//  @override
//  Widget build(BuildContext context) {
//    return const MaterialApp(
//      debugShowCheckedModeBanner: false, // <--- hide debug bannerf
//      home: HomePage(),
//    );
//  }
//}

import 'package:animated_theme_switcher/animated_theme_switcher.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_app/pages/profile.dart';
import 'package:mobile_app/themes.dart';
import 'package:mobile_app/utils/user_preferences.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);

  await UserPreferences.init();

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  static final String title = 'User Profile';

  @override
  Widget build(BuildContext context) {
    final user = UserPreferences.getUser();

    return ThemeProvider(
      initTheme: user.isDarkMode ? MyThemes.darkTheme : MyThemes.lightTheme,
      child: Builder(
        builder: (context) => MaterialApp(
          debugShowCheckedModeBanner: false,
          theme: Theme.of(context),
          title: title,
          home: ProfilePage(),
        ),
      ),
    );
  }
}
