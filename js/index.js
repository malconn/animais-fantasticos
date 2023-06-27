import ScrollSuave from "./modules/scroll-suave";
import Accordion from "./modules/accordion";
import TabNav from "./modules/tabnav";
import Modal from "./modules/modal";
import Tooltip from "./modules/tooltip";
import fetchAnimais from "./modules/fetch-animais";
import fetchBitcoin from "./modules/fetch-bitcoin";
import ScrollAnima from "./modules/scroll-anima";
import DropdownMenu from "./modules/dropdown-menu";
import MenuMobile from "./modules/menu-mobile";
import Funcionamento from "./modules/funcionamento";
import SlideNav from "./modules/slide";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabNav = new TabNav(".js-tabmenu li", ".js-tabcontent section");
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDownMenu = new DropdownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("./animais-api.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControll(".custom-controlls");
