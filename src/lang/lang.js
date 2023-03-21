const { default: LocalizedStrings } = require("react-localization");

var strings = new LocalizedStrings({
  en: {
    home: {
      caption1:
        "Egypt is establishing an electric vehicle charging stations company worth almost 150 million EGP",
      caption2: "there are more than 70 Electric Station in Egypt",
      caption3: "Electric stations in Egypt",
      brands: "Compatible with vehicle brands",
      header: "Electric Stations",
      p: "You can find your electronic vehicle charging station in Egypt here ",
      searchplaceholder: "Find your stations..",
      contactheader: "Get in Touch",

      contactdescription:
        "EcoCharge is a website that provides service to all stations in Egypt. If you want to contact us, send us a message via gmail, Facebook or YouTube.",
      sendmsgheader: "Send Message Us",
      uname: "Your Name",
      uemail: "Your Email",
      subject: "Subject",
      msg: "Message",
      sendmsg: "Send Message",
    },
    about: {
      header: "Our mission is to charge your electric car.",
      list1: " We provide you with all power stations in Egypt.",
      list2: "You can search for any station you want.",
      list3:
        "You can reach the nearest station to you by registering on the site.",
      list4: "You can order a car that will take you to your place by phone. ",
    },
    navbar: {
      home: "Home",
      about: "About Us",
      services: "Services",
      dashboard: "Dashboard",
      signin: "Login",
      signUp: "Register",
    },
    close: "Close",
    services: {
      paymentDescription:
        "Payments can be conveniently made online using your Visa card but you must log in first and choose the station you want to charge from it",
      paymentHeader: "Pay Online",
      nearestStationHeader: "Nearest Station",
      nearestStationBtn: "Find Nearest Station",
      nearestStationDescription:
        "EcoCharge Provides a service to find the nearest station for you but you must log in first",
      chargingCarHeader: "Charging Car",
      chargingCarBtn: "Call Now",
      chargingCarDescription:
        "If your car's battery runs out, EcoCharge offers the service of charging it at your location.",
      callNowDescription: "You Can Call us In (617) 557-0089",

      next: "Next",
      previous: "Previous",
    },
    card: {
      plug: "Plug",
      noOfPlugs: "Number of plugs",
      address: "Address",
      rating: "Your Evalution",
    },
    nearestStation: {
      showData: "Show Details",
      hiddenData: "Hide Details",
    },
    Login: {
      loginForm: "Login Form",
      placeholderName: "Please Enter your Name ",
      placeholderEmail: "Please Enter your Email ",
      placeholderPassword: "Please  Enter your password",
      forgetPassword: " Did you Forget your Password?",
      resetPassword: "please Click here to reset your password",
      DoNotHaveAnAcount: "If you don't have an account?",
      register: "Register",
      login: " login",
      or: "OR",
      continueWithGoogle: "Login With Google ",
      GoogleSigninSuccess: "GoogleSigninSuccess ",
    },
    register: {
      registerationForm: "Registeration Form",
      placeholderName: "Please Enter your Name",
      placeholderEmail: "Please Enter your Email ",
      placeholderPassword: "Please  Enter your password",
      placeholderConfirmPassword: "Please Confirm your password",
      DoYouHaveAnAcount: "If you Forget your Password?",
      IfNotLogin: "Please click here to reset your Password",
      DoNotHaveAnAcount: " If you don't have an account?",
      register: " Register",
      or: "OR",
      continueWithGoogle: "Continue With Google ",
    },
    ProfilePage: {
      name: "Name",
      edit: "Edit",
      logOut: "Log Out",
      uploudPhoto: "Uploud Your Photo",
      Save: " Save",
    },
    ResetPassword: {
      sendEmail: "Send me an Email",
      enterYourEmail: "ُEnter your Email",
      emailAddress: "Please Enter your Email Address",
      resetPasswordForm: "Reset Password Form",
      EnterYourNewPassword: "Enter Your New Password",
      ConfirmYourPassword: "Confirm Your Password",
      saveNewPassword: " Save New Password",
    },
    payment: {
      egp: "EGP",
      paymentHeader: "Charge Payment",
      quantity: "Quanitity By KW",
      pay: "Pay",
      signinMsg: "Please sign in first",
      totalprice: "Total Price",
    },
    Error: {
      pageNotFound: "OOPS! PAGE NOT FOUND",
      backToHome: "Back To Home",
    },
    Footer: {
      Copyrights: " Copyrights © are Reserved to EcoCharge",
    },
    dashboard: {
      coreUi: "Core Ui",
      creativeLabs: " Creative Labs",
      PoweredBy: " Powered By",
      CoreUIReactAdmin: "Core UI React Admin",
      DashboardTemplate: "Dashboard Template",
      Total: " Total:",
      User: " User",
      Stations: "Stations",
      Rating: "Rating",
      NewUsers: "NewUsers",
      Last7Days: "Last7Days",
      NewStations: "NewStations",
      months: "Months",
      NewRatings: "New Ratings",
      Ratings: "Ratings",
      AddUser: "Add User",
      name: "Name",
      Entername: "Enter name",
      EmailAddress: "Email Address",
      EnteryourEmail: "Enter your Email",
      Password: "Password",
      EnteryourPassword: "Enter your Password",
      ConfirmPassword: "Confirm Password",
      UpdateUser: "Update User",
      Update: "Update",
      Delete: "Delete",
      Users: "Users",
      station_AR: "Station AR",
      Role: "Role",
      Dashboard: "Dashboard",
      Tables: "Tables",
      AddStation: "AddStation",
      station_name: "station_name",
      Address: "Address",
      Address_AR: "Address AR",
      EnterLongitude: " Enter your longitude ",
      Enterlatitude: "Enter your latitude  ",
      EnterAddressStation: "EnterAddressStation",
      Longitude: "Longitude",
      latitude: "Latitude",
      number_of_Plugs: "number_of_Plugs",
      EnterYourPlugs: "Enter Your Plugs",
      Enternumber_of_plugs: "Enternumber_of_plugs",
      Availability: "Availability",
      EnterAvailability: "EnterAvailability",
      Amenities: "Amenities",
      Amenities_AR: "Amenities AR",
      EnterAmenities: "EnterAmenities",
      //    EnterAmenities: "EnterAmenities",
      Description: "Description",
      Description_AR: "Description AR",
      EnterDescription: "EnterDescription",
      phone: "Phone",
      Enterphone: "Enterphone",
      photo: "photo",
      Enterphoto: "Enterphoto",
      Plugs: "Plugs",
      number_of_Plugs: "Number of Plugs",
      updateStation: "Update Station",
      enterStationName: " Enter Station Name",
    },
  },

  ar: {
    home: {
      caption1:
        "مصر تؤسس شركة لمحطات شحن السيارات الكهربائية بقيمة تقارب 150 مليون جنيه",
      caption2: "يوجد أكثر من 70 محطة كهرباء في مصر",
      caption3: "محطات شحن كهربائية فى مصر",
      brands: "متوافق مع ماركات السيارات",
      p: "يمكنك العثور على محطة شحن سيارتك الكهربائية في مصر هنا",
      header: "محطات السيارات الكهربائية",
      searchplaceholder: "ابحث عن محطات..",
      contactheader: "  ابقى على تواصل معنا",
      sendmsgheader: "ارسل لنا رسالة",
      contactdescription:
        "EcoCharge هو موقع إلكتروني يوفر خدمة لجميع المحطات في مصر. إذا كنت ترغب في الاتصال بنا ، أرسل لنا رسالة عبر gmail أو Facebook أو YouTube.",
      uname: "اسمك",
      uemail: "بريدك الكترونى",
      subject: "العنوان",
      msg: "الرسالة",
      sendmsg: "ارسل الرسالة",
    },
    navbar: {
      home: "الرئيسية",
      about: "  نبذة عنا",
      services: "خدماتنا",
      dashboard: "لوحة التحكم",
      signin: "تسجيل الدخول ",
      signUp: "انشاء حساب ",
    },
    about: {
      header: "مهمتنا هي شحن سيارتك الكهربائية .",
      list1: " نحن نوفر لك جميع محطات الكهرباء في مصر.",
      list2: "يمكنك البحث عن أي محطة تريدها .",
      list3: "يكنك الوصول لأقرب محطة لك عن طريق التسجيل في الموقع.",
      list4: "  يمكنك طلب سيارة تصلك حتى مكانك عن طريق الهاتف. ",
    },
    card: {
      plug: "شحن",
      noOfPlugs: "عدد الشواحن",
      address: "العنوان",
      rating: "تقييمك",
    },
    close: "غلق",
    services: {
      paymentDescription:
        "يمكن إجراء المدفوعات بسهولة عبر الإنترنت باستخدام بطاقة Visa الخاصة بك ولكن يجب عليك تسجيل الدخول أولاً واختيار المحطة التي تريد الشحن منها",
      paymentHeader: "الدفع عبر الإنترنت",
      nearestStationHeader: "أقرب محطة",
      nearestStationBtn: "أقرب محطة",
      nearestStationDescription:
        "EcoCharge يوفر خدمة للعثور على أقرب محطة بالنسبة لك ولكن يجب عليك تسجيل الدخول أولاً",
      chargingCarHeader: "سيارات شحن",
      chargingCarBtn: "إتصل الآن",
      chargingCarDescription:
        "إذا نفدت بطارية سيارتك ، فإن EcoCharge يقدم خدمة شحنه في موقعك.",
      callNowDescription: "يمكنك الاتصال بنا على (617) 557-0089",

      next: "التالى",
      previous: "السابق",
    },
    payment: {
      paymentHeader: "الدفع",
      quantity: "الكمية بالكليووات",
      pay: "دفع",
      egp: "جنيه مصري",
      signinMsg: "رجاء تسجيل الدخول اولا",
      totalprice: "الاجمالى ",
    },
    nearestStation: {
      showData: "اظهار التفاصيل",
      hiddenData: "اخفاء التفاصيل",
    },
    Login: {
      loginForm: " تسجيل الدخول",
      placeholderEmail: "  أدخل بريدك الإلكتروني  ",
      placeholderPassword: "    أدخل كلمة المرور ",
      forgetPassword: "هل نسيت كلمة المرور؟ ",
      resetPassword: "     يمكنك إعادة تعيين كلمة المرور من هنا",
      DoNotHaveAnAcount: "ليس لديك حساب؟ ",
      register: " سجل من هنا",
      login: " تسجيل الدخول",
      or: "او",
      continueWithGoogle: "تسجيل الدخول باستخدام جوجل",
      EmailIsRequired: "الإيميل مطلوب ",
      PasswordIsRequired: "الرقم السري مطلوب",
      GoogleSigninSuccess: "تم التسجيل باستخدام جوجل بنجاح ",
    },
    register: {
      registerationForm: "التسجيل لأول مرة",
      placeholderName: "  أدخل اسمك  ",
      placeholderEmail: "  أدخل إيميلك  ",
      placeholderPassword: "  أدخل كلمة المرور ",
      placeholderConfirmPassword: " أدخل كلمة المرور مرة أخرى",
      DoYouHaveAnAcount: "هل تمتلك حساب",
      IfNotLogin: " إعادة تعيين كلمة المرور",
      register: "أضغط هنا للتسجيل",
      or: "أو",
      continueWithGoogle: "الدخول باستخدام إيميل جوجل ",
    },
    ProfilePage: {
      name: "الإسم",
      edit: "تعديل",
      logOut: "تسجيل الخروج",
      uploudPhoto: "إختيار صورة",
      Save: "  حفظ التغيرات",
    },
    ResetPassword: {
      sendEmail: "ارسال اللينك عبر الإيميل",
      enterYourEmail: " أدخل بريدك الإلكتروني",
      resetPasswordForm: "إعادة تعيين كلمة المرور",
      EnterYourNewPassword: "  أدخل كلمة مرور جديدة",
      ConfirmYourPassword: "  أدخل كلمة المرور مرة أخرى",
      saveNewPassword: "حفظ كلمة المرور الجديدة",
    },
    Error: {
      pageNotFound: "الصفحة غير موجودة",
      backToHome: "   الرجوع للصفحة الرئيسية",
    },
    Footer: {
      Copyrights: "حقوق الطبع والنشر محفوظة لشركة EcoCharge©",
    },
    dashboard: {
      coreUi: "واجهة المستخدم الأساسية",
      creativeLabs: "  المعامل الإبداعية",

      PoweredBy: "مشغل بواسطة ",
      CoreUIReactAdmin: "إدارة رد واجهة المستخدم الأساسية",
      DashboardTemplate: "جدول الضبط",
      Total: "الكل",
      User: "المستخدم",
      Stations: "المحطات",
      Rating: "التقييم",
      NewUsers: "المستخدمين الجدد",
      Last7Days: "آخر سبعة أيام",
      NewStations: "محطة جديدة",
      months: "الشهور",
      NewRatings: "تقييم جديد",
      Ratings: "التقييمات",
      AddUser: "إضافة مستخدم جديد",
      name: "الإسم",
      Entername: "أدخل الإسم",
      EmailAddress: "عنوان البريد الإلكتروني",
      EnteryourEmail: "إدخل بريدك الإلكتروني",
      Password: "كلمة المرور",
      EnteryourPassword: "أدخل كلمة المرور",
      ConfirmPassword: "أدخل كلمة المرور مرة أخرى",
      UpdateUser: "التعديل على بيانات المستخدم",
      Update: "التعديل",
      Delete: "الحذف",
      Users: "المستخدمون",
      Role: "نوع المستخدم",
      Dashboard: "جدول الضبط",
      Tables: "الجداول",
      AddStation: "إضافة محطة",
      station_name: "إسم المحطة",
      station_AR: " إسم المحطة بالعربي",
      Address: "العنوان",
      Address_AR: "العنوان بالعربي",
      EnterAddressStation: "إضافة عنوان المحطة",
      Longitude: "دوائر  العرض",
      latitude: "خطوط الطول",
      EnterLongitude: "أدخل دائرة العرض",
      Enterlatitude: "أدخل خط الطول",
      number_of_Plugs: "عدد المقابس",
      Enternumber_of_plugs: "أدخل عدد المقابس",
      EnterYourPlugs: "أدخل المقابس",
      Availability: "المتوفر في المحطة",
      EnterAvailability: "أدخل المتوفر في المحطة",
      Amenities_AR: " وسائل الراحة بالعربي ",
      Amenities: "وسائل الراحة ",
      EnterAmenities: "أدخل وسائل الراحة المتوفرة",
      Description_AR: " الوصف بالعربي",
      Description: "الوصف",
      EnterDescription: "أدخل الوصف",
      phone: "رقم الهاتف",
      Enterphone: "أدخل رقم الهاتف",
      photo: "الصورة",
      Enterphoto: "أدخل الصورة",
      Plugs: "المقابس",
      number_of_Plugs: "أدخل عددالمقابس",
      updateStation: "تعديل المحطة",
      enterStationName: " أدخل إسم المحطة",
    },
  },
});
strings.setLanguage(localStorage.getItem("lang") || "en");

export default strings;
