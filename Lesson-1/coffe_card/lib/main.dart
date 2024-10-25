import 'package:coffe_card/home/home.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() {
  runApp(const MaterialApp(title: 'coffe card', home: Home()));
}

// class Sandbox extends StatelessWidget {
//   const Sandbox({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Column(
//         children: [
//           Column(
//             children: [
//               Expanded(
//                 child: const Text(
//                   "donex",
//                   style: TextStyle(
//                     fontFamily: "roboto",
//                     fontSize: 20,
//                     color: Colors.blue,
//                   ),
//                 ),
//               ),
//               Image.asset('assets/images/coffe.png'),
//             ],
//           ),
//         ],
//       ),
//     );
//   }
// }
