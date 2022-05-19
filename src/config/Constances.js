import * as AppConfig from './AppConfig';

// public class Constances {


export const DISTANCE_CONST = 1024;
// change the url depending on the name of your web hosting
// export const BASE_URL = "https://droideve.com/smartgeostore";
export const BASE_URL = AppConfig.BASE_URL;
export const BASE_URL_API = AppConfig.BASE_URL;
export const TERMS_OF_USE_URL = AppConfig.BASE_URL;
export const PRIVACY_POLICY_URL = AppConfig.BASE_URL;
export const FORGET_PASSWORD = AppConfig.BASE_URL + "/fpassword";


//  public static class ModulesConfig {
export const SERVICE_PAYMENT_MODULE = "booking_payment";
export const STORE_MODULE = "store";
export const SERVICE_MODULE = "service";
export const OFFER_MODULE = "offer";
export const EVENT_MODULE = "event";
export const MESSENGER_MODULE = "messenger";
export const SLIDER_MODULE = "nsbanner";
export const BOOKING_MODULE = "booking";

// public static class OrderByFilter {
export const RECENT = "recent";
export const NEARBY = "nearby";
export const TOP_RATED = "top_rated";
export const NEARBY_TOP_RATED = "nearby_top_rated";

const API_VERSION = "1.0";

// store API's
export const API_USER_GET_STORES = BASE_URL_API + "/" + API_VERSION + "/store/getStores";
export const API_USER_GET_REVIEWS = BASE_URL_API + "/" + API_VERSION + "/store/getComments";
export const API_USER_UPDATE_STORE = BASE_URL_API + "/" + API_VERSION + "/webservice/updateStore";
export const API_RATING_STORE = BASE_URL_API + "/" + API_VERSION + "/store/rate";
export const API_SAVE_STORE = BASE_URL_API + "/" + API_VERSION + "/store/saveStore";
export const API_REMOVE_STORE = BASE_URL_API + "/" + API_VERSION + "/store/removeStore";
// event API's
export const API_USER_GET_EVENTS = BASE_URL_API + "/" + API_VERSION + "/event/getEvents";
//category API's
export const API_USER_GET_CATEGORY = BASE_URL_API + "/" + API_VERSION + "/category/getCategories";
// uploader API's
export const API_USER_UPLOAD64 = BASE_URL_API + "/" + API_VERSION + "/uploader/uploadImage64";
// user API's
export const API_USER_LOGIN = BASE_URL_API + "/" + API_VERSION + "/user/signIn";
export const API_USER_SIGNUP = BASE_URL_API + "/" + API_VERSION + "/user/signUp";
export const API_USER_CHECK_CONNECTION = BASE_URL_API + "/" + API_VERSION + "/user/checkUserConnection";
export const API_BLOCK_USER = BASE_URL_API + "/" + API_VERSION + "/user/blockUser";
export const API_GET_USERS = BASE_URL_API + "/" + API_VERSION + "/user/getUsers";
export const API_UPDATE_ACCOUNT = BASE_URL_API + "/" + API_VERSION + "/user/updateAccount";
export const API_UPDATE_ACCOUNT_PASSWORD = BASE_URL_API + "/" + API_VERSION + "/user/updateAccountPassword";
export const API_USER_REGISTER_TOKEN = BASE_URL_API + "/" + API_VERSION + "/user/registerToken";
export const API_REFRESH_POSITION = BASE_URL_API + "/" + API_VERSION + "/user/refreshPosition";
// setting API's
export const API_APP_INIT = BASE_URL_API + "/" + API_VERSION + "/setting/app_initialization";
// messenger API's
export const API_LOAD_MESSAGES = BASE_URL_API + "/" + API_VERSION + "/messenger/loadMessages";
export const API_LOAD_DISCUSSION = BASE_URL_API + "/" + API_VERSION + "/messenger/loadDiscussion";
export const API_INBOX_MARK_AS_SEEN = BASE_URL_API + "/" + API_VERSION + "/messenger/markMessagesAsSeen";
export const API_INBOX_MARK_AS_LOADED = BASE_URL_API + "/" + API_VERSION + "/messenger/markMessagesAsLoaded";
export const API_SEND_MESSAGE = BASE_URL_API + "/" + API_VERSION + "/messenger/sendMessage";
// offer API's
export const API_GET_OFFERS = BASE_URL_API + "/" + API_VERSION + "/offer/getOffers";
// campaign API's
export const API_MARK_VIEW = BASE_URL_API + "/" + API_VERSION + "/campaign/markView";
export const API_MARK_RECEIVE = BASE_URL_API + "/" + API_VERSION + "/campaign/markReceive";

// gallery
export const API_GET_GALLERY = BASE_URL_API + "/" + API_VERSION + "/gallery/getGallery";

// Slider
export const API_GET_SLIDERS = BASE_URL_API + "/" + API_VERSION + "/nsbanner/getBanners";

// Notification API's
export const API_NOTIFICATIONS_GET = BASE_URL_API + "/" + API_VERSION + "/nshistoric/getNotifications";
export const API_NOTIFICATIONS_COUNT_GET = BASE_URL_API + "/" + API_VERSION + "/nshistoric/getCount";
export const API_NOTIFICATIONS_EDIT_STATUS = BASE_URL_API + "/" + API_VERSION + "/nshistoric/changeStatus";
export const API_NOTIFICATIONS_REMOVE = BASE_URL_API + "/" + API_VERSION + "/nshistoric/remove";
export const API_NOTIFICATIONS_AGREEMENT = BASE_URL_API + "/" + API_VERSION + "/campaign/notification_agreement";

// Bookmark API's
export const API_SAVE_STORE_BOOKMARK = BASE_URL_API + "/" + API_VERSION + "/store/saveStore";
export const API_REMOVE_STORE_BOOKMARK = BASE_URL_API + "/" + API_VERSION + "/store/removeStore";
export const API_SAVE_EVENT_BOOKMARK = BASE_URL_API + "/" + API_VERSION + "/event/saveEventBK";
export const API_REMOVE_EVENT_BOOKMARK = BASE_URL_API + "/" + API_VERSION + "/event/removeEventBK";
export const API_GET_BOOKMARKS = BASE_URL_API + "/" + API_VERSION + "/bookmark/getBookmarks";

// Orders
export const API_BOOKING_GET = BASE_URL_API + "/" + API_VERSION + "/booking/getBookings";
export const API_BOOKING_CREATE = BASE_URL_API + "/" + API_VERSION + "/booking/createBooking";
export const API_UPDATE_ORDER = BASE_URL_API + "/" + API_VERSION + "/booking/updateBooking";

// Modules
export const API_AVAILABLE_MODULES = BASE_URL_API + "/" + API_VERSION + "/modules_manager/availableModules";
export const API_APP_CONFIG = BASE_URL_API + "/" + API_VERSION + "/setting/getAppConfig";


// payment
export const API_PAYMENT_GATEWAY = BASE_URL_API + "/" + API_VERSION + "/booking_payment/getPayments";
export const API_PAYMENT_LINK = BASE_URL_API + "/" + API_VERSION + "/booking_payment/get_payment_link";
export const API_PAYMENT_LINK_CALL = BASE_URL + "/booking_payment/link_call";



//     public static class initConfig {

// WARNING :  DO NOT EDIT THIS
export const ListCats = [];
export const Numboftabs = 0;

//         public static class fonts {
//         }

// WARNING :  DO NOT EDIT THIS
//         public static class Tabs {

export const HOME = 0;
export const BOOKMAKRS = -1;
export const MOST_RATED = -2;
export const MOST_RECENT = -3;
export const EVENTS = -4;
export const CHAT = -5;
export const NEARBY_OFFERS = -6;
//         }

//         public static class AppInfos {

// set the description
export const ABOUT_CONTENT = AppConfig.ABOUT_CONTENT;

// Your email that you wish that users on your app will contact you.
export const ADDRESS_CONTACT = AppConfig.ADDRESS_CONTACT;