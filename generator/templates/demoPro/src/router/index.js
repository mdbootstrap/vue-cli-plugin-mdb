import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import CSSPage from '../docs/categories/CSSPage';
import ComponentsPage from '../docs/categories/ComponentsPage';
import AdvancedPage from '../docs/categories/AdvancedPage';
import NavigationMenuPage from '../docs/categories/NavigationMenuPage';
import FormsMenuPage from '../docs/categories/FormsMenuPage';
import TablesPage from '../docs/categories/TablesPage';
import ModalsPage from '../docs/categories/ModalsPage';
import AddonsPage from '../docs/categories/AddonsPage';

// FREE
import AnimationsPage from '../docs/CSS/AnimationsPage';
import AlertPage from '../docs/Components/AlertPage';
import AccordionPage from '../docs/Advanced/AccordionPage';
import BadgePage from '../docs/Components/BadgePage';
import BackgroundImagePage from '../docs/CSS/BackgroundImagePage';
import BlogComponentsPage from '../docs/Plugins/BlogComponentsPage';
import ButtonPage from '../docs/Components/ButtonPage';
import ButtonsGroupPage from '../docs/Components/ButtonsGroupPage';
import BreadcrumbPage from '../docs/Navigation/BreadcrumbPage';
import CardPage from '../docs/Components/CardPage';
import CarouselPage from '../docs/Advanced/CarouselPage';
import ChartPage from '../docs/Advanced/ChartPage';
import CollapsePage from '../docs/Advanced/CollapsePage';
import DataTablePage from '../docs/Tables/DataTablePage';
import DataTableJSONPage from '../docs/Tables/DataTableJSONPage';
import DropdownPage from '../docs/Components/DropdownPage';
import EdgeHeaderPage from '../docs/Components/EdgeHeaderPage';
import FaPage from '../docs/CSS/FaPage';
import FooterPage from '../docs/Navigation/FooterPage';
import FormsPage from '../docs/Forms/FormsPage';
import GradientPage from '../docs/CSS/GradientPage';
import GoogleMapsPage from '../docs/Advanced/GoogleMapsPage';
import GridPage from '../docs/GridPage';
import HamburgerMenuPage from '../docs/Navigation/HamburgerMenuPage';
import HomePage from '../docs/HomePage';
import HoverPage from '../docs/CSS/HoverPage';
import IframePage from '../docs/Plugins/IframePage';
import InputsPage from '../docs/Forms/InputsPage';
import InputGroupPage from '../docs/Forms/InputGroupPage';
import JumbotronPage from '../docs/Components/JumbotronPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import ListGroupPage from '../docs/Components/ListGroupPage';
import MasksPage from '../docs/CSS/MasksPage';
import MediaPage from '../docs/Components/MediaPage';
import ModalPage from '../docs/Modals/ModalPage';
import ModalEventsPage from '../docs/Modals/ModalEventsPage';
import ModalExamplesPage from '../docs/Modals/ModalExamplesPage';
import ModalFormsPage from '../docs/Modals/ModalFormsPage';
import ModalStylesPage from '../docs/Modals/ModalStylesPage';
import SelectPageFree from '../docs/Forms/SelectPage';
import NavsPage from '../docs/Navigation/NavsPage';
import NavbarPage from '../docs/Navigation/NavbarPage';
import NavigationPagev1 from '../docs/Navigation/NavigationPagev1';
import NavigationPagev2 from '../docs/Navigation/NavigationPagev2';
import NavigationPagev3 from '../docs/Navigation/NavigationPagev3';
import NavigationPagev4 from '../docs/Navigation/NavigationPagev4';
import PaginationPage from '../docs/Components/PaginationPage';
import PanelPage from '../docs/Components/PanelPage';
import PopoverPage from '../docs/Advanced/PopoverPage';
import ProgressBarsPage from '../docs/Components/ProgressBarsPage';
import SearchPage from '../docs/Forms/SearchPage';
import CustomColorsScrollbarPage from '../docs/CSS/CustomColorsScrollbarPage';
import SliderPage from '../docs/Components/SliderPage';
import SpinnersPage from '../docs/Components/SpinnersPage';
import TabsPage from '../docs/Components/TabsPage';
import TablePage from '../docs/CSS/TablePage';
import TableAdditionalPage from '../docs/CSS/TableAdditionalPage';
import TableResponsivePage from '../docs/CSS/TableResponsivePage';
import TablePaginationPage from '../docs/Tables/TablePaginationPage';
import TableScrollPage from '../docs/Tables/TableScrollPage';
import TableSearchPage from '../docs/Tables/TableSearchPage';
import TableSortPage from '../docs/Tables/TableSortPage';
import TooltipPage from '../docs/Advanced/TooltipPage';
import ValidationPage from '../docs/Forms/ValidationPage';
import VideoCarouselPage from '../docs/Advanced/VideoCarouselPage';
import VideoPage from '../docs/Plugins/VideoPage';
import WavesPage from '../docs/Advanced/WavesPage';
import StretchedLinkPage from '../docs/Components/StretchedLinkPage';
import NotificationsFreePage from '../docs/Advanced/NotificationsPage';
import MasonryPage from '../docs/CSS/MasonryPage';
import SwitchPage from '../docs/Forms/SwitchPage';
// removeIf(free)
import NotificationsPage from '../docs/pro/Advanced/NotificationsPage';
import AutocompletePage from '../docs/pro/Forms/AutocompletePage';
import ButtonsGroupProPage from '../docs/pro/Components/ButtonsGroupProPage';
import CardProPage from '../docs/pro/Components/CardProPage';
import CardExtendedPage from '../docs/pro/Components/CardExtendedPage';
import CarouselProPage from '../docs/pro/Advanced/CarouselProPage';
import ChatPage from '../docs/pro/Plugins/ChatPage';
import ChipsPage from '../docs/pro/Components/ChipsPage';
import DropdownProPage from '../docs/pro/Components/DropdownProPage';
import DoubleNavigationPagev1 from '../docs/pro/Navigation/DoubleNavigationPagev1';
import DoubleNavigationPagev2 from '../docs/pro/Navigation/DoubleNavigationPagev2';
import DoubleNavigationPagev3 from '../docs/pro/Navigation/DoubleNavigationPagev3';
import DoubleNavigationPagev4 from '../docs/pro/Navigation/DoubleNavigationPagev4';
import DoubleNavigationPagev5 from '../docs/pro/Navigation/DoubleNavigationPagev5';
import ChartProPage from '../docs/pro/Advanced/ChartProPage';
import GalleryPage from '../docs/pro/Advanced/GalleryPage';
import GradientProPage from '../docs/pro/CSS/GradientProPage';
import HamburgerMenuPagePro from '../docs/pro/Navigation/HamburgerMenuPagePro';
import JumbotronPagePro from '../docs/pro/Components/JumbotronPagePro';
import ProgressBarsProPage from '../docs/pro/Components/ProgressBarsProPage';
import InputGroupProPage from '../docs/pro/Forms/InputGroupProPage';
import TabsPagePro from '../docs/pro/Components/TabsPage';
import PillsPage from '../docs/pro/Components/PillsPage';
import SideNavPage from '../docs/pro/Navigation/SideNavPage';
import ButtonProPage from '../docs/pro/Components/ButtonProPage';
import ButtonsSocialPage from '../docs/pro/Components/ButtonsSocialPage';
import AccordionProPage from '../docs/pro/Advanced/AccordionProPage';
import ScrollSpyPage from '../docs/pro/Navigation/ScrollSpyPage';
import SelectPage from '../docs/pro/Forms/SelectPage';
import ModalExamplesProPage from '../docs/pro/Modals/ModalExamplesProPage';
import ModalFormsProPage from '../docs/pro/Modals/ModalFormsProPage';
import MultiselectPage from '../docs/pro/Forms/MultiselectPage';
import SliderProPage from '../docs/pro/Components/SliderProPage';
import InputsProPage from '../docs/pro/Forms/InputsPage';
import DatePickerPage from '../docs/pro/Forms/DatePickerPage';
import TimePickerPage from '../docs/pro/Forms/TimePickerPage';
import LightboxPage from '../docs/pro/Advanced/LightboxPage';
import MegaMenuPage from '../docs/pro/Navigation/MegaMenuPage';
import StreakPage from '../docs/pro/Plugins/StreakPage';
import MultiCarouselPage from '../docs/pro/Advanced/MultiCarouselPage';
import TimelinePage from '../docs/pro/Plugins/TimelinePage';
import ThumbnailsCarouselPage from '../docs/pro/Advanced/ThumbnailsCarouselPage';
import StickyPage from '../docs/pro/Advanced/StickyPage';
import FormsPagePro from '../docs/pro/Forms/FormsPage';
import StepperPage from '../docs/pro/Components/StepperPage';
import SearchPagePro from '../docs/pro/Forms/SearchProPage';
import FooterPagePro from '../docs/pro/Navigation/FooterProPage';
import SectionsPage from '../docs/pro/sections/SectionsPage';
import BlogPage from '../docs/pro/sections/BlogPage';
import FeaturesPage from '../docs/pro/sections/FeaturesPage';
import TestimonialsPage from '../docs/pro/sections/TestimonialsPage';
import TestimonialsMultiPage from '../docs/pro/sections/TestimonialsMultiPage';
import TeamPage from '../docs/pro/sections/TeamPage';
import ProjectsPage from '../docs/pro/sections/ProjectsPage';
import SocialPage from '../docs/pro/sections/SocialPage';
import MagazinePage from '../docs/pro/sections/MagazinePage';
import EcommercePage from '../docs/pro/sections/EcommercePage';
import ContactPage from '../docs/pro/sections/ContactPage';
import CallToActionButtonsIntro from '../docs/pro/sections/CallToActionButtonsIntro';
import AppPage from '../docs/pro/sections/AppPage';
import MinimalistIntroPage from '../docs/pro/sections/MinimalistIntroPage';
import ClassicFormPage from '../docs/pro/sections/ClassicFormPage';
import ContactFormPage from '../docs/pro/sections/ContactFormPage';
import ParallaxIntro from '../docs/pro/sections/ParallaxIntro';
import VideoBackgroundPage from '../docs/pro/sections/VideoBackgroundPage';
import TableEditablePage from '../docs/pro/Tables/TableEditablePage';
import VideoProPage from '../docs/pro/Plugins/VideoProPage';
import ParallaxPage from '../docs/pro/CSS/ParallaxPage';
import SpinnersPagePro from '../docs/pro/Components/SpinnersPagePro';
import MobilePage from '../docs/pro/Advanced/MobilePage';
import BlogComponentsPagePro from '../docs/pro/Plugins/BlogComponentsPagePro';
import EcommerceComponentsPage from '../docs/pro/Plugins/EcommerceComponentsPage';
import SmoothScrollPage from '../docs/pro/Advanced/SmoothScrollPage';
import CustomColorsScrollbarProPage from '../docs/pro/CSS/CustomColorsScrollbarProPage';
import HalfPageIntro from '../docs/pro/sections/HalfPageIntro';
import ValidationProPage from '../docs/pro/Forms/ValidationPage';
import PreloadingScriptPage from '../docs/pro/Components/PreloadingScriptPage';
import SwitchProPage from '../docs/pro/Forms/SwitchProPage';
import TooltipProPage from '../docs/pro/Advanced/TooltipProPage';
import TableFilterPage from '../docs/pro/Tables/TableFilterPage';
import BackgroundImageProPage from '../docs/pro/CSS/BackgroundImageProPage';
import FileInputPage from '../docs/pro/Forms/FileInputPage';
// endRemoveIf(free)
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    // CATEGORIES
    {
      path: '/css',
      name: 'CSSPage',
      component: CSSPage
    }, {
      path: '/components',
      name: 'ComponentsPage',
      component: ComponentsPage
    }, {
      path: '/advanced',
      name: 'AdvancedPage',
      component: AdvancedPage
    },
    {
      path: '/navigation',
      name: 'NavigationMenuPage',
      component: NavigationMenuPage
    },
    {
      path: '/forms',
      name: 'FormsMenuPage',
      component: FormsMenuPage
    },
    {
      path: '/tables',
      name: 'TablesPage',
      component: TablesPage
    },
    {
      path: '/modals',
      name: 'ModalsPage',
      component: ModalsPage
    },
    {
      path: '/plugins',
      name: 'AddonsPage',
      component: AddonsPage
    },

    // FREE
    {
      path: '/advanced/accordion',
      name: 'AccordionPage',
      component: AccordionPage
    }, {
      path: '/components/badge',
      name: 'BadgePage',
      component: BadgePage
    }, {
      path: '/css/background',
      name: 'BackgroundImagePage',
      component: BackgroundImagePage
    }, {
      path: '/css/gradient',
      name: 'GradientPage',
      component: GradientPage
    }, {
      path: '/components/grid',
      name: 'GridPage',
      component: GridPage
    }, {
      path: '/components/card',
      name: 'CardPage',
      component: CardPage
    }, {
      path: '/components/button',
      name: 'ButtonPage',
      component: ButtonPage
    }, {
      path: '/components/button-group',
      name: 'ButtonsGroupPage',
      component: ButtonsGroupPage
    }, {
      path: '/navigation/hamburger',
      name: 'HamburgerMenuPage',
      component: HamburgerMenuPage
    }, {
      path: '/css/table',
      name: 'TablePage',
      component: TablePage
    }, {
      path: '/css/table-additional',
      name: 'TableAdditionalPage',
      component: TableAdditionalPage
    }, {
      path: '/tables/datatable',
      name: 'DataTablePage',
      component: DataTablePage
    }, {
      path: '/tables/datatableJSON',
      name: 'DataTableJSONPage',
      component: DataTableJSONPage
    }, {
      path: '/plugins/iframe',
      name: 'IframePage',
      component: IframePage
    }, {
      path: '/tables/table-pagination',
      name: 'TablePaginationPage',
      component: TablePaginationPage
    }, {
      path: '/advanced/maps',
      name: 'GoogleMapsPage',
      component: GoogleMapsPage
    }, {
      path: '/css/table-responsive',
      name: 'TableResponsviePage',
      component: TableResponsivePage
    }, {
      path: '/tables/table-search',
      name: 'TableSearchPage',
      component: TableSearchPage
    }, {
      path: '/tables/table-sort',
      name: 'TableSortPage',
      component: TableSortPage
    }, {
      path: '/tables/table-scroll',
      name: 'TableScrollPage',
      component: TableScrollPage
    }, {
      path: '/components/dropdown',
      name: 'DropdownPage',
      component: DropdownPage
    }, {
      path: '/components/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage
    }, {
      path: '/advanced/carousel',
      name: 'CarouselPage',
      component: CarouselPage
    }, {
      path: '/navigation/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    }, {
      path: '/css/hover',
      name: 'HoverPagePage',
      component: HoverPage
    }, {
      path: '/css/icons',
      name: 'FaPage',
      component: FaPage
    }, {
      path: '/css/scrollbar',
      name: 'CustomColorsScrollbarPage',
      component: CustomColorsScrollbarPage
    }, {
      path: '/forms/inputs',
      name: 'InputsPage',
      component: InputsPage
    }, {
      path: '/forms/group',
      name: 'InputGroupPage',
      component: InputGroupPage
    }, {
      path: '/components/liveDemo',
      name: 'LiveDemoPage',
      component: LiveDemoPage
    }, {
      path: '/components/media',
      name: 'MediaPage',
      component: MediaPage
    }, {
      path: '/components/listgroup',
      name: 'ListGroupPage',
      component: ListGroupPage
    }, {
      path: '/navigation/navbar',
      name: 'NavbarPage',
      component: NavbarPage
    }, {
      path: '/navigation/navs',
      name: 'NavsPage',
      component: NavsPage
    }, {
      path: '/navigation/navigation-v1',
      name: 'NavigationPagev1',
      component: NavigationPagev1
    }, {
      path: '/navigation/navigation-v2',
      name: 'NavigationPagev2',
      component: NavigationPagev2
    }, {
      path: '/navigation/navigation-v3',
      name: 'NavigationPagev3',
      component: NavigationPagev3
    }, {
      path: '/navigation/navigation-v4',
      name: 'NavigationPagev4',
      component: NavigationPagev4
    }, {
      path: '/components/alerts',
      name: 'AlertPage',
      component: AlertPage
    }, {
      path: '/advanced/collapse',
      name: 'CollapsePage',
      component: CollapsePage
    }, {
      path: '/components/pagination',
      name: 'PaginationPage',
      component: PaginationPage
    }, {
      path: '/components/panel',
      name: 'PanelPage',
      component: PanelPage
    }, {
      path: '/advanced/chart',
      name: 'ChartPage',
      component: ChartPage
    }, {
      path: '/components/progress-bars',
      name: 'ProgressBarsPage',
      component: ProgressBarsPage
    }, {
      path: '/advanced/tooltip',
      name: 'TooltipPage',
      component: TooltipPage
    }, {
      path: '/advanced/popover',
      name: 'PopoverPage',
      component: PopoverPage
    }, {
      path: '/components/edge-header',
      name: 'EdgeHeaderPage',
      component: EdgeHeaderPage
    }, {
      path: '/css/masks',
      name: 'MasksPage',
      component: MasksPage
    }, {
      path: '/forms/validation',
      name: 'ValidationPage',
      component: ValidationPage
    }, {
      path: '/advanced/videocarousel',
      name: 'VideoCarouselPage',
      component: VideoCarouselPage
    }, {
      path: '/modals/modal',
      name: 'ModalPage',
      component: ModalPage
    }, {
      path: '/modals/events',
      name: 'ModalEventsPage',
      component: ModalEventsPage
    }, {
      path: '/modals/examples',
      name: 'ModalExamplesPage',
      component: ModalExamplesPage
    }, {
      path: '/modals/forms',
      name: 'ModalFormsPage',
      component: ModalFormsPage
    }, {
      path: '/modals/styles',
      name: 'ModalStylesPage',
      component: ModalStylesPage
    }, {
      path: '/components/slider',
      name: 'SliderPage',
      component: SliderPage
    }, {
      path: '/forms/forms',
      name: 'FormsPage',
      component: FormsPage
    }, {
      path: '/forms/search',
      name: 'SearchPage',
      component: SearchPage
    }, {
      path: '/navigation/footer',
      name: 'FooterPage',
      component: FooterPage
    }, {
      path: '/components/tabs',
      name: 'TabsPage',
      component: TabsPage
    }, {
      path: '/forms/select',
      name: 'SelectPageFree',
      component: SelectPageFree
    }, {
      path: '/plugins/video',
      name: 'VideoPage',
      component: VideoPage
    }, {
      path: '/components/spinners',
      name: 'SpinnersPage',
      component: SpinnersPage
    }, {
      path: '/plugins/blog-components',
      name: 'BlogComponentsPage',
      component: BlogComponentsPage
    }, {
      path: '/advanced/wave-effect',
      name: 'WavesPage',
      component: WavesPage
    }, {
      path: '/css/animations',
      name: 'AnimationsPage',
      component: AnimationsPage
    }, {
      path: '/components/stretched-link',
      name: 'StretchedLinkPage',
      component: StretchedLinkPage
    }, {
      path: '/advanced/notifications',
      name: 'NotificationsFreePage',
      component: NotificationsFreePage
    },{
      path: '/css/masonry',
      name: 'MasonryPage',
      component: MasonryPage
    }, {
      path: '/forms/switch',
      name: 'SwitchPage',
      component: SwitchPage
    },
    // removeIf(free)
    {
      path: '/advanced/pro/notify',
      name: 'NotificationsPage',
      component: NotificationsPage
    },{
      path: '/forms/pro/autocomplete',
      name: 'AutocompletePage',
      component: AutocompletePage
    },{
      path: '/components/pro/button-group',
      name: 'ButtonsGroupProPage',
      component: ButtonsGroupProPage
    }, {
      path: '/components/pro/card',
      name: 'CardProPage',
      component: CardProPage
    }, {
      path: '/components/pro/card-extended',
      name: 'CardExtendedPage',
      component: CardExtendedPage
    }, {
      path: '/advanced/pro/carousel',
      name: 'CarouselProPage',
      component: CarouselProPage
    }, {
      path: '/plugins/pro/chat',
      name: 'ChatPage',
      component: ChatPage
    }, {
      path: '/components/pro/slider',
      name: 'SliderProPage',
      component: SliderProPage
    }, {
      path: '/plugins/pro/streak',
      name: 'StreakPage',
      component: StreakPage
    }, {
      path: '/components/pro/chips',
      name: 'ChipsPage',
      component: ChipsPage
    }, {
      path: '/components/pro/dropdown',
      name: 'DropdownProPage',
      component: DropdownProPage
    }, {
      path: '/navigation/pro/double-navigation-v1',
      name: 'DoubleNavigationPagev1',
      component: DoubleNavigationPagev1
    }, {
      path: '/navigation/pro/double-navigation-v2',
      name: 'DoubleNavigationPagev2',
      component: DoubleNavigationPagev2
    }, {
      path: '/navigation/pro/double-navigation-v3',
      name: 'DoubleNavigationPagev3',
      component: DoubleNavigationPagev3
    }, {
      path: '/navigation/pro/double-navigation-v4',
      name: 'DoubleNavigationPagev4',
      component: DoubleNavigationPagev4
    }, {
      path: '/navigation/pro/double-navigation-v5',
      name: 'DoubleNavigationPagev5',
      component: DoubleNavigationPagev5
    }, {
      path: '/advanced/pro/chart',
      name: 'ChartProPage',
      component: ChartProPage
    }, {
      path: '/advanced/pro/gallery',
      name: 'GalleryPage',
      component: GalleryPage
    }, {
      path: '/css/pro/gradient',
      name: 'GradientProPage',
      component: GradientProPage
    }, {
      path: '/components/pro/jumbotron',
      name: 'JumbotronPagePro',
      component: JumbotronPagePro
    }, {
      path: '/css/pro/parallax',
      name: 'ParallaxPagePage',
      component: ParallaxPage
    }, {
      path: '/navigation/pro/hamburger',
      name: 'HamburgerMenuPagePro',
      component: HamburgerMenuPagePro
    }, {
      path: '/components/pro/progress-bars-pro',
      name: 'ProgressBarsProPage',
      component: ProgressBarsProPage
    }, {
      path: '/components/pro/tabs',
      name: 'TabsPagePro',
      component: TabsPagePro
    }, {
      path: '/components/pro/pills',
      name: 'PillsPage',
      component: PillsPage
    }, {
      path: '/components/pro/button',
      name: 'ButtonProPage',
      component: ButtonProPage
    }, {
      path: '/components/pro/buttons-social',
      name: 'ButtonsSocialPage',
      component: ButtonsSocialPage
    }, {
      path: '/advanced/pro/accordion',
      name: 'AccordionProPage',
      component: AccordionProPage
    }, {
      path: '/navigation/pro/scrollspy',
      name: 'ScrollSpyPage',
      component: ScrollSpyPage
    }, {
      path: '/forms/pro/select',
      name: 'SelectPage',
      component: SelectPage
    }, {
      path: '/modals/pro/examples',
      name: 'ModalExamplesProPage',
      component: ModalExamplesProPage
    }, {
      path: '/modals/pro/forms',
      name: 'ModalFormsProPage',
      component: ModalFormsProPage
    }, {
      path: '/forms/pro/multiselect',
      name: 'MultiselectPage',
      component: MultiselectPage
    }, {
      path: '/forms/pro/inputs',
      name: 'InputsProPage',
      component: InputsProPage
    }, {
      path: '/forms/pro/group',
      name: 'InputGroupProPage',
      component: InputGroupProPage
    }, {
      path: '/advanced/pro/lightbox',
      name: 'LightboxPage',
      component: LightboxPage
    }, {
      path: '/navigation/pro/megamenu',
      name: 'MegaMenuPage',
      component: MegaMenuPage
    }, {
      path: '/advanced/pro/multicarousel',
      name: 'MultiCarouselPage',
      component: MultiCarouselPage
    }, {
      path: '/advanced/pro/thumbnailscarousel',
      name: 'ThumbnailsCarouselPage',
      component: ThumbnailsCarouselPage
    }, {
      path: '/navigation/pro/sidenav',
      name: 'SideNavPage',
      component: SideNavPage
    }, {
      path: '/advanced/pro/sticky',
      name: 'Sticky',
      component: StickyPage
    }, {
      path: '/forms/pro/datepicker',
      name: 'DatePickerPage',
      component: DatePickerPage
    }, {
      path: '/plugins/pro/timeline',
      name: 'TimelinePage',
      component: TimelinePage
    }, {
      path: '/plugins/pro/blog-components',
      name: 'BlogComponentsPagePro',
      component: BlogComponentsPagePro
    }, {
      path: '/plugins/pro/e-commerce-components',
      name: 'EcommerceComponentsPage',
      component: EcommerceComponentsPage
    }, {
      path: '/forms/pro/timepicker',
      name: 'TimePickerPage',
      component: TimePickerPage
    }, {
      path: '/forms/pro/forms',
      name: 'FormsPagePro',
      component: FormsPagePro
    }, {
      path: '/forms/pro/search',
      name: 'SearchPagePro',
      component: SearchPagePro
    }, {
      path: '/components/pro/stepper',
      name: 'StepperPage',
      component: StepperPage
    }, {
      path: '/components/pro/spinners',
      name: 'SpinnersPagePro',
      component: SpinnersPagePro
    }, {
      path: '/navigation/pro/footer',
      name: 'FooterPagePro',
      component: FooterPagePro
    }, {
      path: '/tables/pro/table-editable',
      name: 'TableEditablePage',
      component: TableEditablePage
    }, {
      path: '/advanced/pro/smooth',
      name: 'SmoothScrollPage',
      component: SmoothScrollPage
    }, {
      path: '/css/pro/scrollbar',
      name: 'CustomColorsScrollbarProPage',
      component: CustomColorsScrollbarProPage
    }, {
      path: '/advanced/pro/mobile',
      name: 'MobilePage',
      component: MobilePage
    }, {
      path: '/sections',
      name: 'SectionsPage',
      component: SectionsPage
    }, {
      path: '/sections/blog',
      name: 'BlogPage',
      component: BlogPage
    }, {
      path: '/sections/features',
      name: 'FeaturesPage',
      component: FeaturesPage
    }, {
      path: '/sections/testimonials',
      name: 'TestimonialsPage',
      component: TestimonialsPage
    }, {
      path: '/sections/testimonials-multi',
      name: 'TestimonialsMultiPage',
      component: TestimonialsMultiPage
    }, {
      path: '/sections/team',
      name: 'TeamPage',
      component: TeamPage
    }, {
      path: '/sections/projects',
      name: 'ProjectsPage',
      component: ProjectsPage
    }, {
      path: '/sections/social',
      name: 'SocialPage',
      component: SocialPage
    }, {
      path: '/sections/magazine',
      name: 'MagazinePage',
      component: MagazinePage
    }, {
      path: '/sections/e-commerce',
      name: 'EcommercePage',
      component: EcommercePage
    }, {
      path: '/sections/contact',
      name: 'ContactPage',
      component: ContactPage
    }, {
      path: '/sections/contactform',
      name: 'ContactFormPage',
      component: ContactFormPage
    }, {
      path: '/sections/app',
      name: 'AppPage',
      component: AppPage
    }, {
      path: '/sections/classic',
      name: 'ClassicFormPage',
      component: ClassicFormPage
    }, {
      path: '/sections/parallax',
      name: 'ParallaxIntro',
      component: ParallaxIntro
    }, {
      path: '/sections/video',
      name: 'VideoBackgroundPage',
      component: VideoBackgroundPage
    }, {
      path: '/plugins/pro/video',
      name: 'VideoProPage',
      component: VideoProPage
    }, {
      path: '/sections/cto',
      name: 'CallToActionButtonsIntro',
      component: CallToActionButtonsIntro
    }, {
      path: '/sections/minimalist',
      name: 'MinimalistIntroPage',
      component: MinimalistIntroPage
    }, {
      path: '/sections/halfpageintro',
      name: 'HalfPageIntro',
      component: HalfPageIntro
    }, {
      path: '/forms/pro/validation',
      name: 'ValidationProPage',
      component: ValidationProPage
    }, {
      path: '/components/pro/preloading-script',
      name: 'Preloading Script',
      component: PreloadingScriptPage
    }, {
      path: '/forms/pro/switch',
      name: 'SwitchProPage',
      component: SwitchProPage
    }, {
      path: '/advanced/pro/tooltip',
      name: 'TooltipProPage',
      component: TooltipProPage
    }, {
      path: '/tables/pro/table-filter',
      name: 'TableFilterPage',
      component: TableFilterPage
    }, {
      path: '/css/pro/background',
      name: 'BackgroundImageProPage',
      component: BackgroundImageProPage
    }, {
      path: '/forms/pro/file-input',
      name: 'FileInputPage',
      component: FileInputPage
    }
    // endRemoveIf(free)
  ]
});
