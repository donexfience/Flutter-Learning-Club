

import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:const Text('home page'),
      backgroundColor: Colors.yellowAccent,
      centerTitle: true,
      ),
      body:const Center(child: Text("hello this is home page")),
    );
  }
}