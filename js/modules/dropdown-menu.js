import outsideClick from "./outsideclick";

export default class initDropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = this.events;
    }
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    this.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
