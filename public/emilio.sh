#!/bin/bash   
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' 


echo -e "${GREEN} What is the name of the app?${NC}"
read name


# Getting the name of the app
NAME=$name

flutter create -e $NAME

cd $NAME

echo -e "${GREEN} Do you want to initialize the flutter app? (y/n)${NC}"
read response

if [ "$response" == "y" ] || [ "$response" == "Y" ] || [ "$response" == "yes" ] || [ "$response" == "YES" ];
then
    mkdir -p lib/blocs/app
    mkdir -p lib/blocs/minimal
    mkdir -p lib/data/local
    mkdir -p lib/data/provider
    mkdir -p lib/data/repository
    mkdir -p lib/data/service
    mkdir -p lib/models
    mkdir -p lib/shared
    mkdir -p lib/utilities
    mkdir -p lib/views
    mkdir -p ./assets/icons
    mkdir -p ./assets/general

    # services
    touch lib/data/service/service_locator.dart
    touch lib/data/provider/provider.dart
    touch lib/data/repository/repository.dart
    # local database
    touch lib/data/local/local_storage.dart
    # utilities
    touch lib/utilities/app_constants.dart
    touch lib/utilities/app_images.dart
    touch lib/utilities/color_constants.dart
    touch lib/utilities/extensions.dart
    touch lib/utilities/packages.dart
    touch lib/utilities/size_config.dart
    touch lib/utilities/route_config.dart
    touch lib/utilities/utilities.dart
    touch lib/utilities/utilities.dart
    touch lib/main.dart

printf "
import 'package:bash_test/data/service/service_locator.dart';
import 'package:bash_test/utilities/packages.dart';
import 'package:$NAME/utilities/packages.dart';

import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // add the git it locator
  //initLocator();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      SizeConfig().init(constraints);
      return MaterialApp.router(
        routerConfig: AppRouter.appRouter,
        debugShowCheckedModeBanner: false,
        themeMode: ThemeMode.light,
        title: \"$NAME\",
      );
    });
  }
}

    " >> lib/main.dart

    printf "import 'package:get_it/get_it.dart';
        final locator = GetIt.instance;
        " >> lib/data/service/service_locator.dart

    # write to the route config file
printf "
import 'package:$NAME/main.dart';
import 'package:$NAME/utilities/packages.dart';

class AppRouter {
    static final appRouter = GoRouter(initialLocation: '/welcome', routes: [
        GoRoute(
        path: '/welcome',
        pageBuilder: (context, state) => CustomTransitionPage<void>(
                key: state.pageKey,
                child:  Container(),
                transitionsBuilder:
                    (context, animation, secondaryAnimation, child) =>
                        FadeTransition(opacity:animation, child: child),
                ),
        ),
    ]);
}

class AppRoute {
//* Authentication
static const String welcome = '/auth/welcome';
}
" >> lib/utilities/route_config.dart
        # write to the size config file
printf "import 'dart:developer';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

class SizeConfig {
static double _screenWidth = 0;
static double _screenHeight = 0;
static double _blockWidth = 0;
static double _blockHeight = 0;

static double textMultiplier = 0;
static double imageSizeMultiplier = 0;
static double heightMultiplier = 0;
static double widthMultiplier = 0;

void init(BoxConstraints constraints) {
    _screenWidth = constraints.maxWidth;
    _screenHeight = constraints.maxHeight;
    log('$_screenWidth $_screenHeight');
    _blockWidth = _screenWidth / 50.5854791898;
    _blockHeight = _screenHeight / 112.4121759774;
    log('$_blockWidth $_blockHeight');
    textMultiplier = _blockHeight;
    imageSizeMultiplier = _blockWidth;
    heightMultiplier = _blockHeight;
    widthMultiplier = _blockWidth;
}
}
" >> lib/utilities/size_config.dart

printf "
export 'package:flutter/rendering.dart';
export 'package:flutter/material.dart';
export 'package:go_router/go_router.dart';
export 'package:$NAME/utilities/utilities.dart';
export 'package:shared_preferences/shared_preferences.dart';
export 'package:google_fonts/google_fonts.dart';
export 'package:toastification/toastification.dart';
export 'package:equatable/equatable.dart';
export 'package:flutter_bloc/flutter_bloc.dart';
export 'package:shimmer/shimmer.dart';
export 'package:flutter_spinkit/flutter_spinkit.dart';
export 'package:flutter_svg/svg.dart';
export 'package:gap/gap.dart';
export 'package:flutter/foundation.dart';
export './utilities.dart';
" >> lib/utilities/packages.dart

printf "
import 'dart:convert';
import 'package:$NAME/utilities/packages.dart';

class LocalStorageManager {
    final SharedPreferences _sharedPreferences;
    const LocalStorageManager(this._sharedPreferences);

    Future<void> saveString(String key, String value) async {
        await _sharedPreferences.setString(key, value);
    }

    Future<String?> getString(String key) async {
        return _sharedPreferences.getString(key);
    }

    Future<void> saveBool(String key, bool value) async {
        await _sharedPreferences.setBool(key, value);
    }

    Future<bool?> getBool(String key) async {
        return _sharedPreferences.getBool(key);
    }

    Future<void> saveInt(String key, int value) async {
        await _sharedPreferences.setInt(key, value);
    }

    Future<int?> getInt(String key) async {
        return _sharedPreferences.getInt(key);
    }

    Future<void> saveDouble(String key, double value) async {
        await _sharedPreferences.setDouble(key, value);
    }

    Future<double?> getDouble(String key) async {
        return _sharedPreferences.getDouble(key);
    }

    Future<void> saveStringList(String key, List<String> value) async {
        await _sharedPreferences.setStringList(key, value);
    }

    Future<List<String>?> getStringList(String key) async {
        return _sharedPreferences.getStringList(key);
    }

    Future<void> remove(String key) async {
        await _sharedPreferences.remove(key);
    }

    Future<void> clear() async {
        await _sharedPreferences.clear();
    }

    Future<bool> containsKey(String key) async {
        return _sharedPreferences.containsKey(key);
    }

    Future<void> saveObject(String key, Object value) async {
        final String jsonString = jsonEncode(value);
        await _sharedPreferences.setString(key, jsonString);
    }

    Future<T?> getObject<T>(String key) async {
        final String? jsonString = _sharedPreferences.getString(key);
        if (jsonString == null) {
        return null;
        }
        return jsonDecode(jsonString) as T;
    }

    Future<void> saveObjectList(String key, List<Object> value) async {
        final List<String> jsonStringList =
            value.map((e) => jsonEncode(e)).toList();
        await _sharedPreferences.setStringList(key, jsonStringList);
    }

    Future<List<T>?> getObjectList<T>(String key) async {
        final List<String>? jsonStringList = _sharedPreferences.getStringList(key);
        if (jsonStringList == null) {
        return null;
        }
        return jsonStringList.map((e) => jsonDecode(e) as T).toList();
    }

    Future<void> saveObjectMap(String key, Map<String, Object> value) async {
        final Map<String, String> jsonStringMap =
            value.map((key, value) => MapEntry(key, jsonEncode(value)));
        await _sharedPreferences.setString(key, jsonEncode(jsonStringMap));
    }

    Future<Map<String, T>?> getObjectMap<T>(String key) async {
        final String? jsonString = _sharedPreferences.getString(key);
        if (jsonString == null) {
        return null;
        }
        final Map<String, String> jsonStringMap = jsonDecode(jsonString);
        return jsonStringMap
            .map((key, value) => MapEntry(key, jsonDecode(value) as T));
    }

    Future<void> saveObjectListMap(
        String key, List<Map<String, Object>> value) async {
        final List<String> jsonStringList =
            value.map((e) => jsonEncode(e)).toList();
        await _sharedPreferences.setStringList(key, jsonStringList);
    }

    Future<List<Map<String, T>>?> getObjectListMap<T>(String key) async {
        final List<String>? jsonStringList = _sharedPreferences.getStringList(key);
        if (jsonStringList == null) {
        return null;
        }
        return jsonStringList.map((e) => jsonDecode(e) as Map<String, T>).toList();
    }

    Future<void> saveObjectMapList(
        String key, Map<String, List<Object>> value) async {
        final Map<String, List<String>> jsonStringMap = value.map((key, value) =>
            MapEntry(key, value.map((e) => jsonEncode(e)).toList()));
        await _sharedPreferences.setString(key, jsonEncode(jsonStringMap));
    }

    Future<Map<String, List<T>>?> getObjectMapList<T>(String key) async {
        final String? jsonString = _sharedPreferences.getString(key);
        if (jsonString == null) {
        return null;
        }
        final Map<String, List<String>> jsonStringMap = jsonDecode(jsonString);
        return jsonStringMap.map((key, value) =>
            MapEntry(key, value.map((e) => jsonDecode(e) as T).toList()));
    }
}
" >> lib/data/local/local_storage.dart

printf "export './size_config.dart';
export './app_images.dart';
export './color_constants.dart';
export './extensions.dart';
export './route_config.dart';
export './packages.dart';
export './app_constants.dart';
" >> lib/utilities/utilities.dart

printf "
import 'package:$NAME/utilities/packages.dart';
extension StringExtension on String {
String capitalize() {
    return '\${this[0].toUpperCase()}\${substring(1).toLowerCase()}';
}

String toTitleCase() => replaceAll(RegExp(' +'), ' ')
    .split(' ')
    .map((str) => str.capitalize())
    .join(' ');

    String toException() {
        return split(\":\")[1].trim();
    }
}

extension ErrorToast on BuildContext {

void showErrorToast({
    required String title,
    required String message,
    required BuildContext context,
}) {
    Toastification().show(
    context: context,
    type: ToastificationType.error,
    style: ToastificationStyle.flat,
    title: Text(
        title,
        style: GoogleFonts.inter(
        fontSize: 14,
        color: Colors.red,
        fontWeight: FontWeight.w600,
        ),
    ),
    description: Text(
        message,
        style: GoogleFonts.inter(
        fontSize: 12,
        color: Colors.red,
        fontWeight: FontWeight.w400,
        ),
    ),
    alignment: Alignment.bottomCenter,
    autoCloseDuration: const Duration(seconds: 4),
    );
}

void showSuccessToast(
    {required String title,
    required String message,
    required BuildContext context}) {
    Toastification().show(
    context: context,
    type: ToastificationType.success,
    style: ToastificationStyle.flat,
    title: Text(
        title,
        style: GoogleFonts.inter(
        fontSize: 14,
        color: green,
        fontWeight: FontWeight.w600,
        ),
    ),
    description: Text(
        message,
        style: GoogleFonts.inter(
        fontSize: 12,
        color: green,
        fontWeight: FontWeight.w400,
        ),
    ),
    alignment: Alignment.topCenter,
    autoCloseDuration: const Duration(seconds: 4),
    );
}

void openDrawer(BuildContext context) {
    Scaffold.of(context).openEndDrawer();
    return;
}

void showInfoToast(
    {required String title,
    required String message,
    required BuildContext context}) {
    Toastification().show(
    context: context,
    type: ToastificationType.info,
    style: ToastificationStyle.flat,
    title: Text(
        title,
        style: GoogleFonts.inter(
        fontSize: 2.2 * SizeConfig.textMultiplier,
        color: green,
        fontWeight: FontWeight.w600,
        ),
    ),
    description: Text(
        message,
        style: GoogleFonts.inter(
        fontSize: 1.8 * SizeConfig.textMultiplier,
        color: const Color(0xff606873),
        fontWeight: FontWeight.w400,
        ),
    ),
    icon: const Icon(
        Icons.close,
        size: 20,
        color: Color(0xff606873),
    ),
    alignment: Alignment.bottomCenter,
    closeOnClick: true,
    autoCloseDuration: const Duration(seconds: 10),
    );
}

void showSuccessSnackBar({required String message}) {
    ScaffoldMessenger.of(this).showSnackBar(
    SnackBar(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
        ),
        content: Text(
        message,
        style: GoogleFonts.inter(
            fontSize: 2 * SizeConfig.textMultiplier,
            color: white,
            fontWeight: FontWeight.w500,
        ),
        ),
        backgroundColor: green,
        duration: const Duration(seconds: 4),
    ),
    );
}

void showInfoSnackBar({required String message}) {
    ScaffoldMessenger.of(this).showSnackBar(
    SnackBar(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
        ),
        content: Text(
        message,
        style: GoogleFonts.inter(
            fontSize: 2 * SizeConfig.textMultiplier,
            color: white,
            fontWeight: FontWeight.w500,
        ),
        ),
        backgroundColor: green,
        duration: const Duration(seconds: 4),
    ),
    );
}

void showWarningSnackBar({required String message}) {
    ScaffoldMessenger.of(this).showSnackBar(
    SnackBar(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
        ),
        content: Text(
        message,
        style: GoogleFonts.inter(
            fontSize: 2 * SizeConfig.textMultiplier,
            color: white,
            fontWeight: FontWeight.w500,
        ),
        ),
        backgroundColor: Colors.yellow.shade700,
        duration: const Duration(seconds: 4),
    ),
    );
}

void showErrorSnackBar({required String message}) {
    ScaffoldMessenger.of(this).showSnackBar(
    SnackBar(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
        ),
        content: Text(
        message,
        style: GoogleFonts.inter(
            fontSize: 2 * SizeConfig.textMultiplier,
            color: white,
            fontWeight: FontWeight.w500,
        ),
        ),
        backgroundColor: Color.fromARGB(255, 230, 82, 82),
        duration: const Duration(seconds: 4),
    ),
    );
}

void hideToast() {
    ScaffoldMessenger.of(this).hideCurrentSnackBar();
}

void debouncer({required Duration duration}) {
    Future.delayed(duration);
    return;
}

Future<void> saveString(String key, String value) async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString(key, value);
}

Future<String?> getString(String key) async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    return prefs.getString(key);
}

}" >> lib/utilities/extensions.dart

    echo ""

    echo -e "\033[33m SUCCESS: Files created successfully\033[0m"

    echo ""
else
    echo ""
fi

echo -e "${GREEN} Do you want to add all the default packages? (y/n)${NC}"
read response
 echo ""


if [ "$response" == "y" ] || [ "$response" == "Y" ] || [ "$response" == "yes" ] || [ "$response" == "YES" ];
then
    echo -e "\033[37;44m Adding packages...${NC}"
     echo ""
        flutter pub add get_it
        flutter pub add provider
        flutter pub add shared_preferences
        flutter pub add toastification
        flutter pub add google_fonts
        flutter pub add go_router
        flutter pub add flutter_svg
        flutter pub add flutter_launcher_icons
        flutter pub add flutter_native_splash
        flutter pub add flutter_bloc
        flutter pub add equatable
        flutter pub add dio
        flutter pub add shimmer
        flutter pub add flutter_spinkit
        flutter pub add gap

    echo ""
    echo -e "${YELLOW}SUCCESS: Packages added successfully🚚.${NC}"

    echo ""
else
    echo ""
fi

echo -e "${GREEN} Do you want to initialize notification in you app? (y/n)${NC}"
read response
 echo ""

if [ "$response" == "y" ] || [ "$response" == "Y" ] || [ "$response" == "yes" ] || [ "$response" == "YES" ];
then
echo -e "\033[37;44m Adding notification packages...\033[0m"
 echo ""
flutter pub add firebase_messaging
flutter pub add firebase_core
flutter pub add flutter_local_notifications

printf "export 'package:firebase_core/firebase_core.dart'; " >> lib/utilities/packages.dart
printf "export 'package:firebase_messaging/firebase_messaging.dart'; " >> lib/utilities/packages.dart
printf "export 'package:flutter_local_notifications/flutter_local_notifications.dart'; " >> lib/utilities/packages.dart

touch lib/data/repository/notification_repository.dart
touch lib/data/provider/notification_provider.dart

printf "
import 'package:$NAME/utilities/packages.dart';

abstract class NotificationTemplate {
    Future<void> initializeNotifications();
    Future<void> sendNotification({required String title, required String body});
    Future<String> getNotificationToken();
}

class NotificationRepository extends NotificationTemplate {
    late FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin;
    late AndroidNotificationChannel channel;
    NotificationRepository() {
        flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();

        channel = const AndroidNotificationChannel(
        'low_importance_channel',
        'Low Importance Notifications',
        description: 'This channel is used for important notifications.',
        importance: Importance.high,
        );
        var initializationSettingsAndroid =
            const AndroidInitializationSettings('$NAME');
        var initializationSettings = InitializationSettings(
        android: initializationSettingsAndroid,
        iOS: const DarwinInitializationSettings(
            requestAlertPermission: true,
            requestBadgePermission: true,
            requestSoundPermission: false,
        ),
        );
        flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();
        flutterLocalNotificationsPlugin.initialize(
        initializationSettings,
        );
        flutterLocalNotificationsPlugin
            .resolvePlatformSpecificImplementation<
                AndroidFlutterLocalNotificationsPlugin>()
            ?.createNotificationChannel(channel);

        FirebaseMessaging.instance.setForegroundNotificationPresentationOptions(
        alert: true,
        badge: true,
        sound: false,
        );
    }

    @override
    Future<String> getNotificationToken() async {
        try {
        final token = await FirebaseMessaging.instance.getToken();
        debugPrint('The firebase messaging token is: \$token');
        return token!;
        } catch (e) {
        debugPrint(e.toString());
        throw Exception('Error getting firebase messaging token');
        }
    }

    @override
    Future<void> initializeNotifications() async {
        try {
        await FirebaseMessaging.instance
            .setForegroundNotificationPresentationOptions(
            alert: false,
            badge: true,
            sound: false,
        );
        FirebaseMessaging.onMessage.listen((RemoteMessage message) {
            debugPrint('Message received: \${message.notification!.body}');
            sendNotification(
            body: message.data['message'] ?? message.contentAvailable.toString(),
            title: message.data['title'] ?? message.notification!.title!,
            );
        });
        FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
            debugPrint('Message received: \${message.notification!.body}');
            sendNotification(
            body: message.data['message'] ?? message.contentAvailable.toString(),
            title: message.data['title'] ?? message.notification!.title!,
            );
        });
        } catch (e) {
        debugPrint(e.toString());
        throw Exception('Error initializing firebase messaging');
        }
    }

    @override
    Future<void> sendNotification({required String title, required String body}) {
        return flutterLocalNotificationsPlugin.show(
        0,
        title,
        body,
        const NotificationDetails(
            android: AndroidNotificationDetails(
            "2",
            'normal Notifications',
            channelDescription: 'This is the notifications normal channel',
            importance: Importance.high,
            priority: Priority.high,
            showWhen: false,
            ),
        ),
        );
    }
}" >> lib/data/repository/notification_repository.dart

printf "
import 'package:$NAME/data/repository/notification_repository.dart';

class NotificationProvider extends NotificationTemplate {
    final NotificationRepository _notificationRepository;
    NotificationProvider({required NotificationRepository notificationRepository})
        : _notificationRepository = notificationRepository;

    @override
    Future<String> getNotificationToken() {
        return _notificationRepository.getNotificationToken();
    }

    @override
    Future<void> initializeNotifications() {
        return _notificationRepository.initializeNotifications();
    }

    @override
    Future<void> sendNotification({required String title, required String body}) {
        return _notificationRepository.sendNotification(title: title, body: body);
    }
}
" >> lib/data/provider/notification_provider.dart
 echo ""

echo -e "${YELLOW} Notifications added successfully.${NC}"
 echo ""

else
    echo ""
fi

echo -e "\033[39;45m SUCCESS:Thank you for using the emilio flutter script.😎${NC}"



