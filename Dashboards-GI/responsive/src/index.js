const color = {
  color_60: "#1A1C22",
  color_30: "#282C35",
  color_10: "#1FCB4F",
  color_focus: "#FFC01E",
};

//main container
const container = {
  main_container: document.getElementById("main_container"),
  header: document.getElementById("header"),
  main_content: document.getElementById("main_content"),
  card_dashboard: document.getElementById("Dashboard_card"),
  container: document.getElementById("container"),
  container_1: document.getElementById("container_1"),
  container_1_1: document.getElementById("container_1_1"),
  container_1_2: document.getElementById("container_1_2"),
  container_1_2_1: document.getElementById("container_1_2_1"),
  container_1_2_2: document.getElementById("container_1_2_2"),
  container_2: document.getElementById("container_2"),
  container_2_1: document.getElementById("container_2_1"),
  container_2_2: document.getElementById("container_2_2"),
};

const card_container = {
  kpi_container: document.getElementById("kpi_cards"),
  kpi_cards: document.getElementsByClassName("kpi_card"),
  line_chart: document.getElementById("line_chart"),
  bar_chart: document.getElementById("bar_chart"),
};

var wndWidth, wndHeight, clntWidth, clntHeight;
window.onresize = window.onload = () => {
  wndWidth = this.innerWidth;
  wndHeight = this.innerHeight;
  clntWidth = this.document.clientWidth;
  clntHeight = this.document.clntHeight;
  responsive_Layout();
};

function responsive_Layout() {
  if ((wndWidth || clntWidth) < 1001) {
    console.log(1);
    container.card_dashboard.insertBefore(
      card_container.kpi_container,
      container.container
    );
    container.container.insertBefore(
      container.container_1_2,
      container.container_2
    );
  } else if ((wndWidth || clntWidth) < 1301) {
    container.container_1.appendChild(
      container.container_1_2,
      container.container_1
    );
    container.container_1_1.insertBefore(
      card_container.kpi_container,
      card_container.line_chart
    );
  } else if ((wndWidth || clntWidth) > 1300) {
    container.container_1.appendChild(
      container.container_1_2,
      container.container_1
    );
    container.card_dashboard.insertBefore(
      card_container.kpi_container,
      container.container
    );
  }
  // if((window.innerWidth || window.document.clientWidth)<891){

  // }
  if ((wndWidth || clntWidth) < 450) {
    container.main_container.style.marginLeft = 0;
    menu("open_menu");
  }
}

// side bar contents
const side_bar_content = {
  side_bar: document.getElementById("side_bar"),
  open_menu: document.getElementById("open_menu"),
  close_menu: document.getElementById("close_menu"),
  bar_head: document.getElementById(" bar_head"),
  logo: document.getElementById("logo"),
  content: document.getElementsByClassName("side_bar_content"),
  icon: document.getElementsByClassName("side_bar_icon"),
  bar_option: document.querySelectorAll(".bar_options"),
};

const header_content = {
  header: document.get,
};

// side bar
menu();
function menu(status = "close_menu") {
  if (status === "close_menu") {
    side_bar_content.side_bar.style.width = "60px";
    setTimeout(() => {
      side_bar_content.open_menu.style.display = "flex";
      side_bar_content.close_menu.style.display = "none";
      side_bar_content.logo.style.visibility = "hidden";
      side_bar_content.logo.style.display = "none";
      for (let i = 0; i < side_bar_content.content.length; i++) {
        side_bar_content.content[i].style.visibility = "hidden";
        side_bar_content.content[i].style.display = "none";
      }
    }, 200);
    setTimeout(() => {
      for (let i = 0; i < side_bar_content.bar_option.length; i++) {
        side_bar_content.bar_option[i].style.justifyContent = "center";
        side_bar_content.bar_option[i].style.paddingLeft = "0%";
      }
    }, 550);
    setTimeout(() => {
      container.main_container.style.marginLeft = "0";
      side_bar_content.side_bar.style.position = "sticky";
    }, 800);
  } else if (status === "open_menu") {
    side_bar_content.open_menu.style.display = "none";
    side_bar_content.side_bar.style.width = "250px";
    if ((window.innerWidth || document.documentElement.clientWidth) < 1260) {
      side_bar_content.side_bar.style.position = "absolute";
      container.main_container.style.marginLeft = "60px";
    }
    setTimeout(() => {
      for (let i = 0; i < side_bar_content.bar_option.length; i++) {
        side_bar_content.bar_option[i].style.justifyContent = "start";
        side_bar_content.bar_option[i].style.paddingLeft = "10%";
      }
    }, 300);
    setTimeout(() => {
      side_bar_content.close_menu.style.display = "flex";
      side_bar_content.logo.style.visibility = "visible";
      side_bar_content.logo.style.display = "flex";
      for (let i = 0; i < side_bar_content.content.length; i++) {
        side_bar_content.content[i].style.visibility = "visible";
        side_bar_content.content[i].style.display = "flex";
      }
    }, 800);
  }
}

//Side bar Navigation

navigate();
function navigate(title = "Dashboard") {
  const tab = {
    show_card: document.querySelectorAll(".show_card"),
    head_title: document.getElementById("head_title"),
    opt: document.getElementById(title),
    card: document.getElementById(title + "_card"),
    opt_container: document.getElementsByClassName("bar_caontent_elements"),
  };
  tab.show_card.forEach((element) => {
    element.style.display = "none";
  });
  start_loader();

  setTimeout(() => {
    stop_loader();
    tab.head_title.innerHTML = title;
    for (let i = 0; i < tab.opt_container.length; i++) {
      tab.opt_container[i].classList.remove("active");
    }
    tab.opt.classList.add("active");
    if ((window.innerWidth || document.documentElement.clientWidth) < 1090) {
      menu("close_menu");
    }
    tab.card.style.display = "flex";
  }, 1000);
}

function start_loader() {
  const loader = document.getElementById("loader_background");
  loader.style.display = "flex";
}
function stop_loader() {
  const loader = document.getElementById("loader_background");
  loader.style.display = "none";
}

//Pop up container
const outside_container = document.getElementById("shaded_background");

const container_contents = {
  icon: document.getElementById("notify_icon"),
  icon_div: document.getElementById("notify"),
  container: document.getElementById("notification"),
  container_head: document.getElementById("notify_head"),
  container_data: document.getElementsByClassName("notify_list_content"),
};

container_contents.icon.addEventListener("click", open_container);
function open_container() {
  outside_container.style.display = "block";

  container_contents.icon.innerHTML = "close";
  container_contents.container.style.border = ".1vh solid #9a9a9a73";
  container_contents.container.style.height = "30vh";
  container_contents.container.style.boxShadow = "0 5px 5px 2px #00000079";
  setTimeout(() => {
    container_contents.container_head.style.display = "flex";
    for (let i = 0; i < container_contents.container_data.length; i++) {
      container_contents.container_data[i].style.display = "flex";
    }
  }, 400);
  container_contents.icon.removeEventListener("click", open_container);
  container_contents.icon.addEventListener("click", close_container);
}
function close_container() {
  outside_container.style.display = "none";

  container_contents.icon.innerHTML = "notifications";
  container_contents.container.style.height = "0vh";
  container_contents.container.style.border = "none";
  container_contents.container.style.boxShadow = "none";
  container_contents.container_head.style.display = "none";
  for (let i = 0; i < container_contents.container_data.length; i++) {
    container_contents.container_data[i].style.display = "none";
  }

  container_contents.icon.removeEventListener("click", close_container);
  container_contents.icon.addEventListener("click", open_container);
}

outside_container.addEventListener("click", close_container);
