import ScrollSuave from "./modules/scroll-suave";
import Accordion from "./modules/accordion";
import TabNav from "./modules/tabnav";
import Modal from "./modules/modal";
import Tooltip from "./modules/tooltip";
import fetchAnimais from "./modules/fetch-animais";
import fetchBitcoin from "./modules/fetch-bitcoin";
import ScrollAnima from "./modules/scroll-anima";
import DropdownMenu from "./modules/dropdown-menu";
import initMenuMobile from "./modules/menu-mobile";
import initFuncionamento from "./modules/funcionamento";

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

const dropDownMenu = new DropdownMenu("[data-dropdown]", [
  "touchstart",
  "click",
]);
dropDownMenu.init();

initMenuMobile();
initFuncionamento();

fetchAnimais("../../animais-api.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
