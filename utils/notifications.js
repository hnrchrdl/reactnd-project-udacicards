import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'hnrchrdl:udacicards:notification';

export async function setLocalNotifications() {
    const result = await AsyncStorage.getItem(NOTIFICATION_KEY);
    const data = JSON.parse(result);
    if (data === null) {
        const { status } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS
        );
        if (status === 'granted') {
            // Cancel all Notifications
            await Notifications.cancelAllScheduledNotificationsAsync();

            // Set date to tommorow at 20h.
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            // Create Notification
            // that gets repeated daily from tommorow on.
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
                time: tomorrow,
                repeat: 'day'
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
        }
    }
}

export async function resetNotifications() {
    // Clear all notifications
    // and set natifications for tomorrow.

    await clearLocalNotification();
    await setLocalNotifications();
}

async function clearLocalNotification() {
    await AsyncStorage.removeItem(NOTIFICATION_KEY);
    await Notifications.cancelAllScheduledNotificationsAsync();
}
function createNotification() {
    return {
        title: 'Do the Quiz!',
        body: '👋 don\'t forget to quizzzz!',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    };
}
