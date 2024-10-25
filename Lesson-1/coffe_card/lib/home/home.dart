
import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({super.key});
  void increaseStrength(){

  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('home page'),
        backgroundColor: Colors.yellowAccent,
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Expanded(
                child: Container(
              color: Colors.red,
            )),
            TextButton(onPressed: increaseStrength, child: const Text("click me")),
          ],
      
        ),
      ),
    );
  }
}
class NewHome extends StatefulWidget{
  const NewHome({super.key});
  @override
  State<NewHome> createState() => _NewHomeState();
}
class _NewHomeState extends State<NewHome>{
  @override
  Widget build(BuildContext context) {
    return const Text("hello");
  }
}

