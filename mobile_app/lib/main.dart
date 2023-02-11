import "package:flutter/material.dart";
import 'pages/home.dart';

void main() => runApp(const MySpotify());

class MySpotify extends StatelessWidget {
  const MySpotify({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false, // <--- hide debug bannerf
      home: HomePage(),
    );
  }
}
