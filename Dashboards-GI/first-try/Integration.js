var prefix = window.location.pathname.substr(

  0,

  window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1

);

var config = {

  host: window.location.hostname,

  prefix: prefix,

  port: window.location.port,

  isSecure: window.location.protocol === "https:",

};

require.config({

  baseUrl:

    (config.isSecure ? "https://" : "http://") +

    config.host +

    (config.port ? ":" + config.port : "") +

    config.prefix +

    "resources",

});

require(["js/qlik"], function (qlik) {

  qlik.on("error", function (error) {

    $("#popupText").append(error.message + "<br>");

    $("#popup").fadeIn(1000);

  });

  $("#closePopup").click(function () {

    $("#popup").hide();

  });

  //Getting HTML Elements

  const button = document.getElementById("btn");

  const SideContent = document.getElementsByClassName("Sidebar");

  const Sidemenu = document.getElementById("sidebar");

  const mobSide = document.getElementsByClassName("Mobclass");

  const mobBtn = document.getElementById("mobileButton");

  const show = document.querySelectorAll(".showcase");

  const tabs = document.querySelectorAll(".tabs");

  const chevron = document.getElementById("chevron");

  const mobchevron = document.getElementById("mobIcon");

  var app = qlik.openApp("3158d525-f15e-4afd-acdb-cb8a162e78ef", config);

  var app2 = qlik.openApp("48365501-b7c9-4dd7-ba1e-4e0d935b368e", config);

  const main = document.getElementById("maincontent");

  const prevbtn = document.getElementById("btn2");

  const closebtn = document.getElementById("btn3");

  const forwardbtn = document.getElementById("btn4");

  const div = document.getElementById("select");

  //getting windows width

  //when a window screen change the function will call

  var windowWidth = window.innerWidth;

  window.onresize = onload = () => {

    windowWidth = this.innerWidth;

    Sidebar(windowWidth);

    qlik.resize();

  };

  Sidebar(windowWidth);

  function Sidebar(windowWidth) {

    //windows width is less than 1000

    if (windowWidth < 1000) {

      Sidemenu.style.height = "5%";

      Sidemenu.style.width = "100%";

      for (i = 0; i < mobSide.length; i++) {

        mobSide[i].style.display = "none";

      }

      for (i = 0; i < SideContent.length; i++) {

        SideContent[i].style.display = "block";

      }

      mobBtn.addEventListener("click", mobilescreen);

    }

    //windows width is greater than 1000

    else {

      Sidemenu.style.width = "5%";

      Sidemenu.style.height = "100%";

      for (i = 0; i < SideContent.length; i++) {

        SideContent[i].style.display = "none";

      }

      for (i = 0; i < mobSide.length; i++) {

        mobSide[i].style.display = "block";

      }

      button.addEventListener("click", lapscreen);

    }

  }

  //Mobile Sidebar function

  function mobilescreen() {

    if (Sidemenu.style.height === "5%") {

      Sidemenu.style.height = "100%";

      Sidemenu.style.transition = "1s  ease";

      for (i = 0; i < tabs.length; i++) {

        tabs[i].classList.add("before");

      }

      for (i = 0; i < mobSide.length; i++) {

        mobSide[i].style.display = "block";

      }

      mobchevron.classList.remove("bx-chevron-down");

      mobchevron.classList.add("bx-chevron-up");

    } else {

      Sidemenu.style.height = "5%";

      Sidemenu.style.transition = "1s  ease";

      for (i = 0; i < tabs.length; i++) {

        tabs[i].classList.remove("before");

      }

      for (i = 0; i < mobSide.length; i++) {

        mobSide[i].style.display = "none";

      }

      mobchevron.classList.remove("bx-chevron-up");

      mobchevron.classList.add("bx-chevron-down");

    }

  }

  //Lap sidebar function

  function lapscreen() {

    if (Sidemenu.style.width === "5%") {

      Sidemenu.style.width = "20%";

      Sidemenu.style.transition = "1s  ease";

      main.style.paddingRight = "10px";

      for (i = 0; i < tabs.length; i++) {

        tabs[i].classList.add("before");

      }

      for (i = 0; i < SideContent.length; i++) {

        SideContent[i].style.display = "block";

      }

      chevron.classList.add("bx-chevron-left");

      chevron.classList.remove("bx-chevron-right");

    } else {

      Sidemenu.style.width = "5%";

      for (i = 0; i < tabs.length; i++) {

        tabs[i].classList.remove("before");

      }

      for (i = 0; i < SideContent.length; i++) {

        SideContent[i].style.display = "none";

      }

      chevron.classList.add("bx-chevron-right");

      chevron.classList.remove("bx-chevron-left");

    }

  }

  // tabs

  //Default active tabs

  tabs[0].classList.add("active");

  show[0].classList.add("showdisplay");

  //switchin tabs condition using For each

  tabs.forEach((t, i) => {

    t.addEventListener("click", () => {

      tabs.forEach((t) => {

        t.classList.add("disable");

        t.classList.remove("active");

      });

      show.forEach((s) => {

        s.classList.add("shownone");

        s.classList.remove("showdisplay");

      });

      t.classList.remove("disable");

      t.classList.add("active");

      //for displaying the content when the tab click

      show[i].classList.remove("shownone");

      show[i].classList.add("showdisplay");

      //Qlik Objects Navigation or switching conditions

      switch (show[i].id) {

        case "document":

          documentTab();

          break;

        case "contact":

          contact();

          break;

        case "prospect":

          Prospect();

          break;

        case "workflow":

          workflow();

          break;

        case "chating":

          chating();

          break;

        case "marketing":

          marketing();

          break;

        case "email":

          Email();

          break;

        case "transaction":

          transition();

          break;

        case "maintaince":

          maintainence();

          break;

        default:

          Dashboard();

          break;

      }

    });

  });

  //Getting Qlik Objects

  function Dashboard() {

    //get objects -- inserted here --

    app.getObject("card1", "uBCNQnw").then(() => {

      document.getElementById("card1").classList.remove("loader");

    });

    app.getObject("card2", "DPYTJen").then(() => {

      document.getElementById("card2").classList.remove("loader");

    });

    app.getObject("card3", "dpHNqS").then(() => {

      document.getElementById("card3").classList.remove("loader");

    });

    app.getObject("linechart", "kjcmDFj").then(() => {

      document.getElementById("linechart").classList.remove("loader");

    });

    app.getObject("barchart", "YtZMjQu").then(() => {

      document.getElementById("barchart").classList.remove("loader");

    });

    app.getObject("Qlik-table", "dXgjx").then(() => {

      document.getElementById("Qlik-table").classList.remove("loader");

    });

    app.getObject("Gauge chart", "MqMVdfh").then(() => {

      document.getElementById("Gauge chart").classList.remove("loader");

    });

    app.getObject("pei chart", "CxEzm").then(() => {

      document.getElementById("pei chart").classList.remove("loader");

    });

  }

  function documentTab() {

    app.getObject("Charts1", "DPYTJen").then(() => {

      document.getElementById("Charts1").classList.remove("loader");

    });

    app.getObject("Charts2", "MqMVdfh").then(() => {

      document.getElementById("Charts2").classList.remove("loader");

    });

    app.getObject("Charts3", "YtZMjQu").then(() => {

      document.getElementById("Charts3").classList.remove("loader");

    });

    app.getObject("Charts4", "CxEzm").then(() => {

      document.getElementById("Charts4").classList.remove("loader");

    });

  }

  function contact() {

    app.getObject("Charts5", "dpHNqS").then(() => {

      document.getElementById("Charts5").classList.remove("loader");

    });

    app.getObject("Charts6", "CxEzm").then(() => {

      document.getElementById("Charts6").classList.remove("loader");

    });

    app.getObject("Charts7", "MqMVdfh").then(() => {

      document.getElementById("Charts7").classList.remove("loader");

    });

    app.getObject("Charts8", "dXgjx").then(() => {

      document.getElementById("Charts8").classList.remove("loader");

    });

  }

  function Prospect() {

    app.getObject("Charts9", "uBCNQnw").then(() => {

      document.getElementById("Charts9").classList.remove("loader");

    });

    app.getObject("Charts10", "dXgjx").then(() => {

      document.getElementById("Charts10").classList.remove("loader");

    });

    app.getObject("Charts11", "MqMVdfh").then(() => {

      document.getElementById("Charts11").classList.remove("loader");

    });

    app.getObject("Charts12", "CxEzm").then(() => {

      document.getElementById("Charts12").classList.remove("loader");

    });

  }

  function workflow() {

    app.getObject("Charts13", "MqMVdfh").then(() => {

      document.getElementById("Charts13").classList.remove("loader");

    });

    app.getObject("Charts14", "YtZMjQu").then(() => {

      document.getElementById("Charts14").classList.remove("loader");

    });

    app.getObject("Charts15", "dXgjx").then(() => {

      document.getElementById("Charts15").classList.remove("loader");

    });

    app.getObject("Charts16", "CxEzm").then(() => {

      document.getElementById("Charts16").classList.remove("loader");

    });

  }

  function chating() {

    app.getObject("Charts17", "uBCNQnw").then(() => {

      document.getElementById("Charts17").classList.remove("loader");

    });

    app.getObject("Charts18", "CxEzm").then(() => {

      document.getElementById("Charts18").classList.remove("loader");

    });

    app.getObject("Charts19", "MqMVdfh").then(() => {

      document.getElementById("Charts19").classList.remove("loader");

    });

    app.getObject("Charts20", "YtZMjQu").then(() => {

      document.getElementById("Charts20").classList.remove("loader");

    });

  }

  function marketing() {

    app.getObject("Charts21", "MqMVdfh").then(() => {

      document.getElementById("Charts21").classList.remove("loader");

    });

    app.getObject("Charts22", "CxEzm").then(() => {

      document.getElementById("Charts22").classList.remove("loader");

    });

    app.getObject("Charts23", "kjcmDFj").then(() => {

      document.getElementById("Charts23").classList.remove("loader");

    });

    app.getObject("Charts24", "dXgjx").then(() => {

      document.getElementById("Charts24").classList.remove("loader");

    });

  }

  function Email() {

    app.getObject("Charts25", "CxEzm").then(() => {

      document.getElementById("Charts25").classList.remove("loader");

    });

    app.getObject("Charts26", "MqMVdfh").then(() => {

      document.getElementById("Charts26").classList.remove("loader");

    });

    app.getObject("Charts27", "DPYTJen").then(() => {

      document.getElementById("Charts27").classList.remove("loader");

    });

    app.getObject("Charts28", "YtZMjQu").then(() => {

      document.getElementById("Charts28").classList.remove("loader");

    });

  }

  function transition() {

    app.getObject("Charts29", "DPYTJen").then(() => {

      document.getElementById("Charts29").classList.remove("loader");

    });

    app.getObject("Charts30", "MqMVdfh").then(() => {

      document.getElementById("Charts30").classList.remove("loader");

    });

    app.getObject("Charts31", "CxEzm").then(() => {

      document.getElementById("Charts31").classList.remove("loader");

    });

    app.getObject("Charts32", "YtZMjQu").then(() => {

      document.getElementById("Charts32").classList.remove("loader");

    });

  }

  function maintainence() {

    app.getObject("Charts33", "MqMVdfh").then(() => {

      document.getElementById("Charts33").classList.remove("loader");

    });

    app.getObject("Charts34", "YtZMjQu").then(() => {

      document.getElementById("Charts34").classList.remove("loader");

    });

    app.getObject("Charts35", "CxEzm").then(() => {

      document.getElementById("Charts35").classList.remove("loader");

    });

    app.getObject("Charts36", "dXgjx").then(() => {

      document.getElementById("Charts36").classList.remove("loader");

    });

  }

  //defaulty geting the qlik object for mainpage

  Dashboard();

  //customized selection options

  //previous selection

  prevbtn.addEventListener("click", previous);

  function previous() {

    app.back();

  }

  //clearall selection

  closebtn.addEventListener("click", clearall);

  function clearall() {

    app.clearAll();

  }

  //forward the selection

  forwardbtn.addEventListener("click", forward);

  function forward() {

    app.forward();

  }

  //condition for manual selection list

  // app.getList("SelectionObject", function (reply) {

  //   console.log(reply);

  //   var str = reply.qSelectionObject.qSelections;

  //   console.log();

  //   console.log(str);

  //   div.innerHTML = "";

  //   for (i = 0; i < str.length; i++) {

  //     var content = document.createElement("div");

  //     content.id = "selection-container";

  //     content.innerText =

  //       str[i].qField + " " + str[i].qSelectedCount + " of " + str[i].qTotal;

  //     div.style.marginTop = "5px";

  //     div.appendChild(content);

  //   }

  // });

  //bookmark api

  app.bookmark.create("City", "City-bookmark", "kjcmDFj");

  app.bookmark.apply("Test");

  //getting global api

  var global = qlik.getGlobal(config);

  global.getAuthenticatedUser(function (reply) {

    alert("Welcome User:" + reply.qReturn);

  });

  app.getObject("CurrentSelections", "CurrentSelections");

});
