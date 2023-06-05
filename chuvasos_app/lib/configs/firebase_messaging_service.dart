import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';

class FirebaseMessagingService {

  const FirebaseMessagingService();

  Future<void> initialize() async {
    await FirebaseMessaging.instance.setForegroundNotificationPresentationOptions(
      badge: true,
      alert: true,
      sound: true,
    );

    getDeviceFirebaseToken();
  }

  Future<String?> getDeviceFirebaseToken() async{
    final token = await FirebaseMessaging.instance.getToken();
    print('=============');
    print(token);
    print('=============');
    return token;
  }
}