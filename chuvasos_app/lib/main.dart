import 'dart:convert';

import 'package:chuvasos_app/configs/firebase_messaging_service.dart';
import 'package:chuvasos_app/configs/firebase_options.dart';
import 'package:chuvasos_app/pages/home_page.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:http/http.dart' as http;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    _registerToken();

    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(),
    );
  }

  _registerToken() async {
    var firebaseService = FirebaseMessagingService();
    await firebaseService.initialize();
    String? token = await firebaseService.getDeviceFirebaseToken();

    var response =
        await http.post(Uri.http('172.16.2.184:5000', '/notification/token'),
            headers: {'Content-Type': 'application/json'},
            body: jsonEncode({
              'token': token,
            }));
    print(response);
    print(response.body);
    print(response.statusCode);
  }
}
