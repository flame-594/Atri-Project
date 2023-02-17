import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useNavbarCb, useNavbarFlexCb, useNavbarFlex1Cb, useNavbarLinksCb, useNavbarFlex2Cb, useNavbarDivCb, useFlex67Cb, useHomeCb, useHomeFlexCb, useHomeFlex1Cb, useHomrFlex3Cb, useHomeFlex2Cb, useCategoryCb, useCategoryMenuFlexCb, useCategoryButtonsCb, useCategoryMenuOptionsCb, useOptionsFlex1Cb, useOption1Cb, useOption2Cb, useOptionsFlex2Cb, useOption3Cb, useOption4Cb, useAboutCb, useAboutUsCb, useAboutFlex2Cb, useAboutFlex7Cb, useAboutFlex1Cb, useAboutFlex3Cb, useAboutFlex4Cb, useAboutFlex5Cb, useAboutFlex6Cb, useMenuCb, useMenuFlex1Cb, useMenuFlex2Cb, useMenuFlex3Cb, useMenuFlex6Cb, useItemFlex1Cb, useItemPrice1Cb, useItemFlex2Cb, useItemPrice2Cb, useMenuFlex7Cb, useItemFlex3Cb, useItemPrice3Cb, useItemFlex4Cb, useItemPrice4Cb, useMenuFlex4Cb, useMenuFlex8Cb, useItemFlex5Cb, useItemPrice5Cb, useItemFlexCb, useItemPrice6Cb, useMenuFlex9Cb, useItemFlex7Cb, useItemPrice7Cb, useItemFlex8Cb, useItemPrice8Cb, useMenuFlex5Cb, useBurgerSpanCb, useBurger_SpanCb, useSpanFlex1Cb, useSpanFlex2Cb, useClientCb, useClientsCb, useClientsFlex1Cb, useClientsFlex2Cb, useClientsFlex3Cb, useClientFlex3Cb, useClientFlex4Cb, useFlex13Cb, useArticlesCb, useArticlesFlexBoxCb, useArticleFlexHeadingCb, useArticlesSectionCb, useArticleFlex1Cb, useArticleFlex2Cb, useArticleFlexBox1Cb, useArticleFlex3Cb, useArticleFlex4Cb, useArticleFlexBox2Cb, useArticleFlex5Cb, useArticleFlex6Cb, useBookingCb, useBookingFlexboxCb, useBookingFlex1Cb, useContacFlex1Cb, useContactFlex2Cb, useContactFlex3Cb, useBookingFlex2Cb, useBookingFlex3Cb, useBookingFormFlex4Cb, useBookingFormFlex3Cb, useFormDateCb, useFormScheduleCb, useBookingFormFlex2Cb, useFormPhoneCb, useFormLocationCb, useBookingFormFlex1Cb, useFormNameCb, useFormEmailCb, useBookingFormMessageCb, useFolloCb, useFollowCb, useFollowFlex1Cb, useFollowFlex2Cb, useFlex3Cb, useFollowFlex3Cb, useFollowFlex5Cb, useFolowFlex5Cb, useFooterCb, useFooterFlexCb, useFooterFlex1Cb, useRatingFlexCb, useInstagramLink3Cb, useInstagramLinkFlexBoxCb, useInstagramLinkFlex2Cb, useInstagramLinkFlex1Cb, useFooterFlex2Cb, usePageListCb, useUtilityListCb, useSponsorsCb, useSponsorFlexCb, useSponsorFlex1Cb, useSponsorFlex2Cb, useSponsorFlex3Cb, useLogoCb, useLink3Cb, useLink4Cb, useLink5Cb, useLink1Cb, useLink2Cb, useNavbarButton1Cb, useNavbarButton2Cb, useMenuIconCb, useHomeText1Cb, useHomeText2Cb, useHomeText3Cb, useHomeButton1Cb, useHomeButton2Cb, useHomeImageCb, useCategoryMenuTextCb, useCategoryMenuButton1Cb, useCategoryMenuButton2Cb, useCategoryImage1Cb, useOptionName1Cb, useDescription1Cb, useExploreOption1Cb, useCategoryImage2Cb, useOptionName2Cb, useDescription2Cb, useExploreOption2Cb, useCategoryImage3Cb, useOptionName3Cb, useDescription3Cb, useExploreOption3Cb, useCategoryImage4Cb, useOptionName4Cb, useDescription4Cb, useExploreOption4Cb, useAboutTextBox5Cb, useAboutTextBox6Cb, useAboutTextBox7Cb, useAboutButton1Cb, useAboutButton2Cb, useAboutImage1Cb, useAboutTextBox1Cb, useAboutImage2Cb, useAboutTextBox2Cb, useAboutImage3Cb, useAboutTextBox3Cb, useAboutImage4Cb, useAboutTextBox4Cb, useMenuTextBox1Cb, useMenuTextBox2Cb, useMenuImage1Cb, useItemName1Cb, useItemText1Cb, usePriceText1Cb, useMenuImage2Cb, useItemName2Cb, useItemText2Cb, usePriceText2Cb, useMenuImage3Cb, useItemName3Cb, useItemText3Cb, usePriceText3Cb, useMenuImage4Cb, useItemName4Cb, useItemText4Cb, usePriceText4Cb, useMenuImage5Cb, useItemName5Cb, useItemText5Cb, usePriceText5Cb, useMenuImage6Cb, useItemName6Cb, useItemText6Cb, usePriceText6Cb, useMenuImage7Cb, useItemName7Cb, useItemText7Cb, usePriceText7Cb, useMenuImage8Cb, useItemName8Cb, useItemText8Cb, usePriceText8Cb, useMenuButton2Cb, useMenuButton1Cb, useSpanImage1Cb, useSpanTextBox1Cb, useSpanTextBox2Cb, useSpanButton2Cb, useSpanButton1Cb, useClientsTextBox1Cb, useClientsTextBox2Cb, useClientsTextBox3Cb, useCarousel1Cb, useCarousel2Cb, useCarousel3Cb, useClientsImage1Cb, useClientsImage2Cb, useClientsImage3Cb, uselientsTextBox3Cb, useClientsTextBox4Cb, useClientsImage4Cb, useClientsTextBox5Cb, useClientsTextBox6Cb, useClientsButton1Cb, useClientsButton2Cb, useMainHeadingCb, useArticlesLinkCb, useArticleImage1Cb, useArticleDate1Cb, useArticleName1Cb, useArticleText1Cb, useArticleImage2Cb, useArticleDate2Cb, useArticleName2Cb, useArticleImage3Cb, useArticleDate3Cb, useArticleName3Cb, useArticleImage4Cb, useArticleDate4Cb, useArticleName4Cb, useArticleImage5Cb, useArticleDate5Cb, useArticleName5Cb, useBookingText1Cb, useBookingText2Cb, useTextBox88Cb, useBookingImage1Cb, useTextBox89Cb, useBookingImage2Cb, useTextBox90Cb, useBookingImage3Cb, useBookingFormButtonCb, useTextBoxNoteCb, useInputNoteCb, useTextBoxDateCb, useInputDateCb, useTextBoxScheduleCb, useInputScheduleCb, useTextBoxPhoneCb, useInputPhoneCb, useTextBoxInputCb, useInputLocationCb, useTextBoxNameCb, useInputNameCb, useTextBoxEmailCb, useInputEmailCb, useMessageTextBoxCb, useFollowTextBox1Cb, useFollowButtonCb, useFollowImg2Cb, useFollowImg1Cb, useFollowImage3Cb, useFollowImage4Cb, useImage6Cb, useFollowImage6Cb, useFooterLogoImageCb, useFooterTextBox1Cb, useRatingStar1Cb, useRatingStar2Cb, useRatingStar3Cb, useRatingStar5Cb, useRatingStar4Cb, useFooterTextBox2Cb, useImage54Cb, useInstagramLink4Cb, useInstagramLink1Cb, useInstagramLink2Cb, usePageHeadingCb, usePage1Cb, usePage2Cb, usePage3Cb, usePage4Cb, usePage5Cb, usePage6Cb, usePage7Cb, useUtilityHeadingCb, useUtility5Cb, useUtility6Cb, useUtility7Cb, useUtility4Cb, useUtility1Cb, useUtility3Cb, useUtility2Cb, useSponsorTextCb, useSponsorImage1Cb, useSponsorImage2Cb, useSponsorImage4Cb, useSponsorImage3Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const NavbarFlexProps = useStore((state)=>state["Home"]["NavbarFlex"]);
const NavbarFlexIoProps = useIoStore((state)=>state["Home"]["NavbarFlex"]);
const NavbarFlexCb = useNavbarFlexCb()
const NavbarFlex1Props = useStore((state)=>state["Home"]["NavbarFlex1"]);
const NavbarFlex1IoProps = useIoStore((state)=>state["Home"]["NavbarFlex1"]);
const NavbarFlex1Cb = useNavbarFlex1Cb()
const NavbarLinksProps = useStore((state)=>state["Home"]["NavbarLinks"]);
const NavbarLinksIoProps = useIoStore((state)=>state["Home"]["NavbarLinks"]);
const NavbarLinksCb = useNavbarLinksCb()
const NavbarFlex2Props = useStore((state)=>state["Home"]["NavbarFlex2"]);
const NavbarFlex2IoProps = useIoStore((state)=>state["Home"]["NavbarFlex2"]);
const NavbarFlex2Cb = useNavbarFlex2Cb()
const NavbarDivProps = useStore((state)=>state["Home"]["NavbarDiv"]);
const NavbarDivIoProps = useIoStore((state)=>state["Home"]["NavbarDiv"]);
const NavbarDivCb = useNavbarDivCb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const HomeProps = useStore((state)=>state["Home"]["Home"]);
const HomeIoProps = useIoStore((state)=>state["Home"]["Home"]);
const HomeCb = useHomeCb()
const HomeFlexProps = useStore((state)=>state["Home"]["HomeFlex"]);
const HomeFlexIoProps = useIoStore((state)=>state["Home"]["HomeFlex"]);
const HomeFlexCb = useHomeFlexCb()
const HomeFlex1Props = useStore((state)=>state["Home"]["HomeFlex1"]);
const HomeFlex1IoProps = useIoStore((state)=>state["Home"]["HomeFlex1"]);
const HomeFlex1Cb = useHomeFlex1Cb()
const HomrFlex3Props = useStore((state)=>state["Home"]["HomrFlex3"]);
const HomrFlex3IoProps = useIoStore((state)=>state["Home"]["HomrFlex3"]);
const HomrFlex3Cb = useHomrFlex3Cb()
const HomeFlex2Props = useStore((state)=>state["Home"]["HomeFlex2"]);
const HomeFlex2IoProps = useIoStore((state)=>state["Home"]["HomeFlex2"]);
const HomeFlex2Cb = useHomeFlex2Cb()
const CategoryProps = useStore((state)=>state["Home"]["Category"]);
const CategoryIoProps = useIoStore((state)=>state["Home"]["Category"]);
const CategoryCb = useCategoryCb()
const CategoryMenuFlexProps = useStore((state)=>state["Home"]["CategoryMenuFlex"]);
const CategoryMenuFlexIoProps = useIoStore((state)=>state["Home"]["CategoryMenuFlex"]);
const CategoryMenuFlexCb = useCategoryMenuFlexCb()
const CategoryButtonsProps = useStore((state)=>state["Home"]["CategoryButtons"]);
const CategoryButtonsIoProps = useIoStore((state)=>state["Home"]["CategoryButtons"]);
const CategoryButtonsCb = useCategoryButtonsCb()
const CategoryMenuOptionsProps = useStore((state)=>state["Home"]["CategoryMenuOptions"]);
const CategoryMenuOptionsIoProps = useIoStore((state)=>state["Home"]["CategoryMenuOptions"]);
const CategoryMenuOptionsCb = useCategoryMenuOptionsCb()
const OptionsFlex1Props = useStore((state)=>state["Home"]["OptionsFlex1"]);
const OptionsFlex1IoProps = useIoStore((state)=>state["Home"]["OptionsFlex1"]);
const OptionsFlex1Cb = useOptionsFlex1Cb()
const Option1Props = useStore((state)=>state["Home"]["Option1"]);
const Option1IoProps = useIoStore((state)=>state["Home"]["Option1"]);
const Option1Cb = useOption1Cb()
const Option2Props = useStore((state)=>state["Home"]["Option2"]);
const Option2IoProps = useIoStore((state)=>state["Home"]["Option2"]);
const Option2Cb = useOption2Cb()
const OptionsFlex2Props = useStore((state)=>state["Home"]["OptionsFlex2"]);
const OptionsFlex2IoProps = useIoStore((state)=>state["Home"]["OptionsFlex2"]);
const OptionsFlex2Cb = useOptionsFlex2Cb()
const Option3Props = useStore((state)=>state["Home"]["Option3"]);
const Option3IoProps = useIoStore((state)=>state["Home"]["Option3"]);
const Option3Cb = useOption3Cb()
const Option4Props = useStore((state)=>state["Home"]["Option4"]);
const Option4IoProps = useIoStore((state)=>state["Home"]["Option4"]);
const Option4Cb = useOption4Cb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const AboutUsProps = useStore((state)=>state["Home"]["AboutUs"]);
const AboutUsIoProps = useIoStore((state)=>state["Home"]["AboutUs"]);
const AboutUsCb = useAboutUsCb()
const AboutFlex2Props = useStore((state)=>state["Home"]["AboutFlex2"]);
const AboutFlex2IoProps = useIoStore((state)=>state["Home"]["AboutFlex2"]);
const AboutFlex2Cb = useAboutFlex2Cb()
const AboutFlex7Props = useStore((state)=>state["Home"]["AboutFlex7"]);
const AboutFlex7IoProps = useIoStore((state)=>state["Home"]["AboutFlex7"]);
const AboutFlex7Cb = useAboutFlex7Cb()
const AboutFlex1Props = useStore((state)=>state["Home"]["AboutFlex1"]);
const AboutFlex1IoProps = useIoStore((state)=>state["Home"]["AboutFlex1"]);
const AboutFlex1Cb = useAboutFlex1Cb()
const AboutFlex3Props = useStore((state)=>state["Home"]["AboutFlex3"]);
const AboutFlex3IoProps = useIoStore((state)=>state["Home"]["AboutFlex3"]);
const AboutFlex3Cb = useAboutFlex3Cb()
const AboutFlex4Props = useStore((state)=>state["Home"]["AboutFlex4"]);
const AboutFlex4IoProps = useIoStore((state)=>state["Home"]["AboutFlex4"]);
const AboutFlex4Cb = useAboutFlex4Cb()
const AboutFlex5Props = useStore((state)=>state["Home"]["AboutFlex5"]);
const AboutFlex5IoProps = useIoStore((state)=>state["Home"]["AboutFlex5"]);
const AboutFlex5Cb = useAboutFlex5Cb()
const AboutFlex6Props = useStore((state)=>state["Home"]["AboutFlex6"]);
const AboutFlex6IoProps = useIoStore((state)=>state["Home"]["AboutFlex6"]);
const AboutFlex6Cb = useAboutFlex6Cb()
const MenuProps = useStore((state)=>state["Home"]["Menu"]);
const MenuIoProps = useIoStore((state)=>state["Home"]["Menu"]);
const MenuCb = useMenuCb()
const MenuFlex1Props = useStore((state)=>state["Home"]["MenuFlex1"]);
const MenuFlex1IoProps = useIoStore((state)=>state["Home"]["MenuFlex1"]);
const MenuFlex1Cb = useMenuFlex1Cb()
const MenuFlex2Props = useStore((state)=>state["Home"]["MenuFlex2"]);
const MenuFlex2IoProps = useIoStore((state)=>state["Home"]["MenuFlex2"]);
const MenuFlex2Cb = useMenuFlex2Cb()
const MenuFlex3Props = useStore((state)=>state["Home"]["MenuFlex3"]);
const MenuFlex3IoProps = useIoStore((state)=>state["Home"]["MenuFlex3"]);
const MenuFlex3Cb = useMenuFlex3Cb()
const MenuFlex6Props = useStore((state)=>state["Home"]["MenuFlex6"]);
const MenuFlex6IoProps = useIoStore((state)=>state["Home"]["MenuFlex6"]);
const MenuFlex6Cb = useMenuFlex6Cb()
const ItemFlex1Props = useStore((state)=>state["Home"]["ItemFlex1"]);
const ItemFlex1IoProps = useIoStore((state)=>state["Home"]["ItemFlex1"]);
const ItemFlex1Cb = useItemFlex1Cb()
const ItemPrice1Props = useStore((state)=>state["Home"]["ItemPrice1"]);
const ItemPrice1IoProps = useIoStore((state)=>state["Home"]["ItemPrice1"]);
const ItemPrice1Cb = useItemPrice1Cb()
const ItemFlex2Props = useStore((state)=>state["Home"]["ItemFlex2"]);
const ItemFlex2IoProps = useIoStore((state)=>state["Home"]["ItemFlex2"]);
const ItemFlex2Cb = useItemFlex2Cb()
const ItemPrice2Props = useStore((state)=>state["Home"]["ItemPrice2"]);
const ItemPrice2IoProps = useIoStore((state)=>state["Home"]["ItemPrice2"]);
const ItemPrice2Cb = useItemPrice2Cb()
const MenuFlex7Props = useStore((state)=>state["Home"]["MenuFlex7"]);
const MenuFlex7IoProps = useIoStore((state)=>state["Home"]["MenuFlex7"]);
const MenuFlex7Cb = useMenuFlex7Cb()
const ItemFlex3Props = useStore((state)=>state["Home"]["ItemFlex3"]);
const ItemFlex3IoProps = useIoStore((state)=>state["Home"]["ItemFlex3"]);
const ItemFlex3Cb = useItemFlex3Cb()
const ItemPrice3Props = useStore((state)=>state["Home"]["ItemPrice3"]);
const ItemPrice3IoProps = useIoStore((state)=>state["Home"]["ItemPrice3"]);
const ItemPrice3Cb = useItemPrice3Cb()
const ItemFlex4Props = useStore((state)=>state["Home"]["ItemFlex4"]);
const ItemFlex4IoProps = useIoStore((state)=>state["Home"]["ItemFlex4"]);
const ItemFlex4Cb = useItemFlex4Cb()
const ItemPrice4Props = useStore((state)=>state["Home"]["ItemPrice4"]);
const ItemPrice4IoProps = useIoStore((state)=>state["Home"]["ItemPrice4"]);
const ItemPrice4Cb = useItemPrice4Cb()
const MenuFlex4Props = useStore((state)=>state["Home"]["MenuFlex4"]);
const MenuFlex4IoProps = useIoStore((state)=>state["Home"]["MenuFlex4"]);
const MenuFlex4Cb = useMenuFlex4Cb()
const MenuFlex8Props = useStore((state)=>state["Home"]["MenuFlex8"]);
const MenuFlex8IoProps = useIoStore((state)=>state["Home"]["MenuFlex8"]);
const MenuFlex8Cb = useMenuFlex8Cb()
const ItemFlex5Props = useStore((state)=>state["Home"]["ItemFlex5"]);
const ItemFlex5IoProps = useIoStore((state)=>state["Home"]["ItemFlex5"]);
const ItemFlex5Cb = useItemFlex5Cb()
const ItemPrice5Props = useStore((state)=>state["Home"]["ItemPrice5"]);
const ItemPrice5IoProps = useIoStore((state)=>state["Home"]["ItemPrice5"]);
const ItemPrice5Cb = useItemPrice5Cb()
const ItemFlexProps = useStore((state)=>state["Home"]["ItemFlex"]);
const ItemFlexIoProps = useIoStore((state)=>state["Home"]["ItemFlex"]);
const ItemFlexCb = useItemFlexCb()
const ItemPrice6Props = useStore((state)=>state["Home"]["ItemPrice6"]);
const ItemPrice6IoProps = useIoStore((state)=>state["Home"]["ItemPrice6"]);
const ItemPrice6Cb = useItemPrice6Cb()
const MenuFlex9Props = useStore((state)=>state["Home"]["MenuFlex9"]);
const MenuFlex9IoProps = useIoStore((state)=>state["Home"]["MenuFlex9"]);
const MenuFlex9Cb = useMenuFlex9Cb()
const ItemFlex7Props = useStore((state)=>state["Home"]["ItemFlex7"]);
const ItemFlex7IoProps = useIoStore((state)=>state["Home"]["ItemFlex7"]);
const ItemFlex7Cb = useItemFlex7Cb()
const ItemPrice7Props = useStore((state)=>state["Home"]["ItemPrice7"]);
const ItemPrice7IoProps = useIoStore((state)=>state["Home"]["ItemPrice7"]);
const ItemPrice7Cb = useItemPrice7Cb()
const ItemFlex8Props = useStore((state)=>state["Home"]["ItemFlex8"]);
const ItemFlex8IoProps = useIoStore((state)=>state["Home"]["ItemFlex8"]);
const ItemFlex8Cb = useItemFlex8Cb()
const ItemPrice8Props = useStore((state)=>state["Home"]["ItemPrice8"]);
const ItemPrice8IoProps = useIoStore((state)=>state["Home"]["ItemPrice8"]);
const ItemPrice8Cb = useItemPrice8Cb()
const MenuFlex5Props = useStore((state)=>state["Home"]["MenuFlex5"]);
const MenuFlex5IoProps = useIoStore((state)=>state["Home"]["MenuFlex5"]);
const MenuFlex5Cb = useMenuFlex5Cb()
const BurgerSpanProps = useStore((state)=>state["Home"]["BurgerSpan"]);
const BurgerSpanIoProps = useIoStore((state)=>state["Home"]["BurgerSpan"]);
const BurgerSpanCb = useBurgerSpanCb()
const Burger_SpanProps = useStore((state)=>state["Home"]["Burger_Span"]);
const Burger_SpanIoProps = useIoStore((state)=>state["Home"]["Burger_Span"]);
const Burger_SpanCb = useBurger_SpanCb()
const SpanFlex1Props = useStore((state)=>state["Home"]["SpanFlex1"]);
const SpanFlex1IoProps = useIoStore((state)=>state["Home"]["SpanFlex1"]);
const SpanFlex1Cb = useSpanFlex1Cb()
const SpanFlex2Props = useStore((state)=>state["Home"]["SpanFlex2"]);
const SpanFlex2IoProps = useIoStore((state)=>state["Home"]["SpanFlex2"]);
const SpanFlex2Cb = useSpanFlex2Cb()
const ClientProps = useStore((state)=>state["Home"]["Client"]);
const ClientIoProps = useIoStore((state)=>state["Home"]["Client"]);
const ClientCb = useClientCb()
const ClientsProps = useStore((state)=>state["Home"]["Clients"]);
const ClientsIoProps = useIoStore((state)=>state["Home"]["Clients"]);
const ClientsCb = useClientsCb()
const ClientsFlex1Props = useStore((state)=>state["Home"]["ClientsFlex1"]);
const ClientsFlex1IoProps = useIoStore((state)=>state["Home"]["ClientsFlex1"]);
const ClientsFlex1Cb = useClientsFlex1Cb()
const ClientsFlex2Props = useStore((state)=>state["Home"]["ClientsFlex2"]);
const ClientsFlex2IoProps = useIoStore((state)=>state["Home"]["ClientsFlex2"]);
const ClientsFlex2Cb = useClientsFlex2Cb()
const ClientsFlex3Props = useStore((state)=>state["Home"]["ClientsFlex3"]);
const ClientsFlex3IoProps = useIoStore((state)=>state["Home"]["ClientsFlex3"]);
const ClientsFlex3Cb = useClientsFlex3Cb()
const ClientFlex3Props = useStore((state)=>state["Home"]["ClientFlex3"]);
const ClientFlex3IoProps = useIoStore((state)=>state["Home"]["ClientFlex3"]);
const ClientFlex3Cb = useClientFlex3Cb()
const ClientFlex4Props = useStore((state)=>state["Home"]["ClientFlex4"]);
const ClientFlex4IoProps = useIoStore((state)=>state["Home"]["ClientFlex4"]);
const ClientFlex4Cb = useClientFlex4Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const ArticlesProps = useStore((state)=>state["Home"]["Articles"]);
const ArticlesIoProps = useIoStore((state)=>state["Home"]["Articles"]);
const ArticlesCb = useArticlesCb()
const ArticlesFlexBoxProps = useStore((state)=>state["Home"]["ArticlesFlexBox"]);
const ArticlesFlexBoxIoProps = useIoStore((state)=>state["Home"]["ArticlesFlexBox"]);
const ArticlesFlexBoxCb = useArticlesFlexBoxCb()
const ArticleFlexHeadingProps = useStore((state)=>state["Home"]["ArticleFlexHeading"]);
const ArticleFlexHeadingIoProps = useIoStore((state)=>state["Home"]["ArticleFlexHeading"]);
const ArticleFlexHeadingCb = useArticleFlexHeadingCb()
const ArticlesSectionProps = useStore((state)=>state["Home"]["ArticlesSection"]);
const ArticlesSectionIoProps = useIoStore((state)=>state["Home"]["ArticlesSection"]);
const ArticlesSectionCb = useArticlesSectionCb()
const ArticleFlex1Props = useStore((state)=>state["Home"]["ArticleFlex1"]);
const ArticleFlex1IoProps = useIoStore((state)=>state["Home"]["ArticleFlex1"]);
const ArticleFlex1Cb = useArticleFlex1Cb()
const ArticleFlex2Props = useStore((state)=>state["Home"]["ArticleFlex2"]);
const ArticleFlex2IoProps = useIoStore((state)=>state["Home"]["ArticleFlex2"]);
const ArticleFlex2Cb = useArticleFlex2Cb()
const ArticleFlexBox1Props = useStore((state)=>state["Home"]["ArticleFlexBox1"]);
const ArticleFlexBox1IoProps = useIoStore((state)=>state["Home"]["ArticleFlexBox1"]);
const ArticleFlexBox1Cb = useArticleFlexBox1Cb()
const ArticleFlex3Props = useStore((state)=>state["Home"]["ArticleFlex3"]);
const ArticleFlex3IoProps = useIoStore((state)=>state["Home"]["ArticleFlex3"]);
const ArticleFlex3Cb = useArticleFlex3Cb()
const ArticleFlex4Props = useStore((state)=>state["Home"]["ArticleFlex4"]);
const ArticleFlex4IoProps = useIoStore((state)=>state["Home"]["ArticleFlex4"]);
const ArticleFlex4Cb = useArticleFlex4Cb()
const ArticleFlexBox2Props = useStore((state)=>state["Home"]["ArticleFlexBox2"]);
const ArticleFlexBox2IoProps = useIoStore((state)=>state["Home"]["ArticleFlexBox2"]);
const ArticleFlexBox2Cb = useArticleFlexBox2Cb()
const ArticleFlex5Props = useStore((state)=>state["Home"]["ArticleFlex5"]);
const ArticleFlex5IoProps = useIoStore((state)=>state["Home"]["ArticleFlex5"]);
const ArticleFlex5Cb = useArticleFlex5Cb()
const ArticleFlex6Props = useStore((state)=>state["Home"]["ArticleFlex6"]);
const ArticleFlex6IoProps = useIoStore((state)=>state["Home"]["ArticleFlex6"]);
const ArticleFlex6Cb = useArticleFlex6Cb()
const BookingProps = useStore((state)=>state["Home"]["Booking"]);
const BookingIoProps = useIoStore((state)=>state["Home"]["Booking"]);
const BookingCb = useBookingCb()
const BookingFlexboxProps = useStore((state)=>state["Home"]["BookingFlexbox"]);
const BookingFlexboxIoProps = useIoStore((state)=>state["Home"]["BookingFlexbox"]);
const BookingFlexboxCb = useBookingFlexboxCb()
const BookingFlex1Props = useStore((state)=>state["Home"]["BookingFlex1"]);
const BookingFlex1IoProps = useIoStore((state)=>state["Home"]["BookingFlex1"]);
const BookingFlex1Cb = useBookingFlex1Cb()
const ContacFlex1Props = useStore((state)=>state["Home"]["ContacFlex1"]);
const ContacFlex1IoProps = useIoStore((state)=>state["Home"]["ContacFlex1"]);
const ContacFlex1Cb = useContacFlex1Cb()
const ContactFlex2Props = useStore((state)=>state["Home"]["ContactFlex2"]);
const ContactFlex2IoProps = useIoStore((state)=>state["Home"]["ContactFlex2"]);
const ContactFlex2Cb = useContactFlex2Cb()
const ContactFlex3Props = useStore((state)=>state["Home"]["ContactFlex3"]);
const ContactFlex3IoProps = useIoStore((state)=>state["Home"]["ContactFlex3"]);
const ContactFlex3Cb = useContactFlex3Cb()
const BookingFlex2Props = useStore((state)=>state["Home"]["BookingFlex2"]);
const BookingFlex2IoProps = useIoStore((state)=>state["Home"]["BookingFlex2"]);
const BookingFlex2Cb = useBookingFlex2Cb()
const BookingFlex3Props = useStore((state)=>state["Home"]["BookingFlex3"]);
const BookingFlex3IoProps = useIoStore((state)=>state["Home"]["BookingFlex3"]);
const BookingFlex3Cb = useBookingFlex3Cb()
const BookingFormFlex4Props = useStore((state)=>state["Home"]["BookingFormFlex4"]);
const BookingFormFlex4IoProps = useIoStore((state)=>state["Home"]["BookingFormFlex4"]);
const BookingFormFlex4Cb = useBookingFormFlex4Cb()
const BookingFormFlex3Props = useStore((state)=>state["Home"]["BookingFormFlex3"]);
const BookingFormFlex3IoProps = useIoStore((state)=>state["Home"]["BookingFormFlex3"]);
const BookingFormFlex3Cb = useBookingFormFlex3Cb()
const FormDateProps = useStore((state)=>state["Home"]["FormDate"]);
const FormDateIoProps = useIoStore((state)=>state["Home"]["FormDate"]);
const FormDateCb = useFormDateCb()
const FormScheduleProps = useStore((state)=>state["Home"]["FormSchedule"]);
const FormScheduleIoProps = useIoStore((state)=>state["Home"]["FormSchedule"]);
const FormScheduleCb = useFormScheduleCb()
const BookingFormFlex2Props = useStore((state)=>state["Home"]["BookingFormFlex2"]);
const BookingFormFlex2IoProps = useIoStore((state)=>state["Home"]["BookingFormFlex2"]);
const BookingFormFlex2Cb = useBookingFormFlex2Cb()
const FormPhoneProps = useStore((state)=>state["Home"]["FormPhone"]);
const FormPhoneIoProps = useIoStore((state)=>state["Home"]["FormPhone"]);
const FormPhoneCb = useFormPhoneCb()
const FormLocationProps = useStore((state)=>state["Home"]["FormLocation"]);
const FormLocationIoProps = useIoStore((state)=>state["Home"]["FormLocation"]);
const FormLocationCb = useFormLocationCb()
const BookingFormFlex1Props = useStore((state)=>state["Home"]["BookingFormFlex1"]);
const BookingFormFlex1IoProps = useIoStore((state)=>state["Home"]["BookingFormFlex1"]);
const BookingFormFlex1Cb = useBookingFormFlex1Cb()
const FormNameProps = useStore((state)=>state["Home"]["FormName"]);
const FormNameIoProps = useIoStore((state)=>state["Home"]["FormName"]);
const FormNameCb = useFormNameCb()
const FormEmailProps = useStore((state)=>state["Home"]["FormEmail"]);
const FormEmailIoProps = useIoStore((state)=>state["Home"]["FormEmail"]);
const FormEmailCb = useFormEmailCb()
const BookingFormMessageProps = useStore((state)=>state["Home"]["BookingFormMessage"]);
const BookingFormMessageIoProps = useIoStore((state)=>state["Home"]["BookingFormMessage"]);
const BookingFormMessageCb = useBookingFormMessageCb()
const FolloProps = useStore((state)=>state["Home"]["Follo"]);
const FolloIoProps = useIoStore((state)=>state["Home"]["Follo"]);
const FolloCb = useFolloCb()
const FollowProps = useStore((state)=>state["Home"]["Follow"]);
const FollowIoProps = useIoStore((state)=>state["Home"]["Follow"]);
const FollowCb = useFollowCb()
const FollowFlex1Props = useStore((state)=>state["Home"]["FollowFlex1"]);
const FollowFlex1IoProps = useIoStore((state)=>state["Home"]["FollowFlex1"]);
const FollowFlex1Cb = useFollowFlex1Cb()
const FollowFlex2Props = useStore((state)=>state["Home"]["FollowFlex2"]);
const FollowFlex2IoProps = useIoStore((state)=>state["Home"]["FollowFlex2"]);
const FollowFlex2Cb = useFollowFlex2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const FollowFlex3Props = useStore((state)=>state["Home"]["FollowFlex3"]);
const FollowFlex3IoProps = useIoStore((state)=>state["Home"]["FollowFlex3"]);
const FollowFlex3Cb = useFollowFlex3Cb()
const FollowFlex5Props = useStore((state)=>state["Home"]["FollowFlex5"]);
const FollowFlex5IoProps = useIoStore((state)=>state["Home"]["FollowFlex5"]);
const FollowFlex5Cb = useFollowFlex5Cb()
const FolowFlex5Props = useStore((state)=>state["Home"]["FolowFlex5"]);
const FolowFlex5IoProps = useIoStore((state)=>state["Home"]["FolowFlex5"]);
const FolowFlex5Cb = useFolowFlex5Cb()
const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const FooterFlexProps = useStore((state)=>state["Home"]["FooterFlex"]);
const FooterFlexIoProps = useIoStore((state)=>state["Home"]["FooterFlex"]);
const FooterFlexCb = useFooterFlexCb()
const FooterFlex1Props = useStore((state)=>state["Home"]["FooterFlex1"]);
const FooterFlex1IoProps = useIoStore((state)=>state["Home"]["FooterFlex1"]);
const FooterFlex1Cb = useFooterFlex1Cb()
const RatingFlexProps = useStore((state)=>state["Home"]["RatingFlex"]);
const RatingFlexIoProps = useIoStore((state)=>state["Home"]["RatingFlex"]);
const RatingFlexCb = useRatingFlexCb()
const InstagramLink3Props = useStore((state)=>state["Home"]["InstagramLink3"]);
const InstagramLink3IoProps = useIoStore((state)=>state["Home"]["InstagramLink3"]);
const InstagramLink3Cb = useInstagramLink3Cb()
const InstagramLinkFlexBoxProps = useStore((state)=>state["Home"]["InstagramLinkFlexBox"]);
const InstagramLinkFlexBoxIoProps = useIoStore((state)=>state["Home"]["InstagramLinkFlexBox"]);
const InstagramLinkFlexBoxCb = useInstagramLinkFlexBoxCb()
const InstagramLinkFlex2Props = useStore((state)=>state["Home"]["InstagramLinkFlex2"]);
const InstagramLinkFlex2IoProps = useIoStore((state)=>state["Home"]["InstagramLinkFlex2"]);
const InstagramLinkFlex2Cb = useInstagramLinkFlex2Cb()
const InstagramLinkFlex1Props = useStore((state)=>state["Home"]["InstagramLinkFlex1"]);
const InstagramLinkFlex1IoProps = useIoStore((state)=>state["Home"]["InstagramLinkFlex1"]);
const InstagramLinkFlex1Cb = useInstagramLinkFlex1Cb()
const FooterFlex2Props = useStore((state)=>state["Home"]["FooterFlex2"]);
const FooterFlex2IoProps = useIoStore((state)=>state["Home"]["FooterFlex2"]);
const FooterFlex2Cb = useFooterFlex2Cb()
const PageListProps = useStore((state)=>state["Home"]["PageList"]);
const PageListIoProps = useIoStore((state)=>state["Home"]["PageList"]);
const PageListCb = usePageListCb()
const UtilityListProps = useStore((state)=>state["Home"]["UtilityList"]);
const UtilityListIoProps = useIoStore((state)=>state["Home"]["UtilityList"]);
const UtilityListCb = useUtilityListCb()
const SponsorsProps = useStore((state)=>state["Home"]["Sponsors"]);
const SponsorsIoProps = useIoStore((state)=>state["Home"]["Sponsors"]);
const SponsorsCb = useSponsorsCb()
const SponsorFlexProps = useStore((state)=>state["Home"]["SponsorFlex"]);
const SponsorFlexIoProps = useIoStore((state)=>state["Home"]["SponsorFlex"]);
const SponsorFlexCb = useSponsorFlexCb()
const SponsorFlex1Props = useStore((state)=>state["Home"]["SponsorFlex1"]);
const SponsorFlex1IoProps = useIoStore((state)=>state["Home"]["SponsorFlex1"]);
const SponsorFlex1Cb = useSponsorFlex1Cb()
const SponsorFlex2Props = useStore((state)=>state["Home"]["SponsorFlex2"]);
const SponsorFlex2IoProps = useIoStore((state)=>state["Home"]["SponsorFlex2"]);
const SponsorFlex2Cb = useSponsorFlex2Cb()
const SponsorFlex3Props = useStore((state)=>state["Home"]["SponsorFlex3"]);
const SponsorFlex3IoProps = useIoStore((state)=>state["Home"]["SponsorFlex3"]);
const SponsorFlex3Cb = useSponsorFlex3Cb()
const LogoProps = useStore((state)=>state["Home"]["Logo"]);
const LogoIoProps = useIoStore((state)=>state["Home"]["Logo"]);
const LogoCb = useLogoCb()
const Link3Props = useStore((state)=>state["Home"]["Link3"]);
const Link3IoProps = useIoStore((state)=>state["Home"]["Link3"]);
const Link3Cb = useLink3Cb()
const Link4Props = useStore((state)=>state["Home"]["Link4"]);
const Link4IoProps = useIoStore((state)=>state["Home"]["Link4"]);
const Link4Cb = useLink4Cb()
const Link5Props = useStore((state)=>state["Home"]["Link5"]);
const Link5IoProps = useIoStore((state)=>state["Home"]["Link5"]);
const Link5Cb = useLink5Cb()
const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const Link2Props = useStore((state)=>state["Home"]["Link2"]);
const Link2IoProps = useIoStore((state)=>state["Home"]["Link2"]);
const Link2Cb = useLink2Cb()
const NavbarButton1Props = useStore((state)=>state["Home"]["NavbarButton1"]);
const NavbarButton1IoProps = useIoStore((state)=>state["Home"]["NavbarButton1"]);
const NavbarButton1Cb = useNavbarButton1Cb()
const NavbarButton2Props = useStore((state)=>state["Home"]["NavbarButton2"]);
const NavbarButton2IoProps = useIoStore((state)=>state["Home"]["NavbarButton2"]);
const NavbarButton2Cb = useNavbarButton2Cb()
const MenuIconProps = useStore((state)=>state["Home"]["MenuIcon"]);
const MenuIconIoProps = useIoStore((state)=>state["Home"]["MenuIcon"]);
const MenuIconCb = useMenuIconCb()
const HomeText1Props = useStore((state)=>state["Home"]["HomeText1"]);
const HomeText1IoProps = useIoStore((state)=>state["Home"]["HomeText1"]);
const HomeText1Cb = useHomeText1Cb()
const HomeText2Props = useStore((state)=>state["Home"]["HomeText2"]);
const HomeText2IoProps = useIoStore((state)=>state["Home"]["HomeText2"]);
const HomeText2Cb = useHomeText2Cb()
const HomeText3Props = useStore((state)=>state["Home"]["HomeText3"]);
const HomeText3IoProps = useIoStore((state)=>state["Home"]["HomeText3"]);
const HomeText3Cb = useHomeText3Cb()
const HomeButton1Props = useStore((state)=>state["Home"]["HomeButton1"]);
const HomeButton1IoProps = useIoStore((state)=>state["Home"]["HomeButton1"]);
const HomeButton1Cb = useHomeButton1Cb()
const HomeButton2Props = useStore((state)=>state["Home"]["HomeButton2"]);
const HomeButton2IoProps = useIoStore((state)=>state["Home"]["HomeButton2"]);
const HomeButton2Cb = useHomeButton2Cb()
const HomeImageProps = useStore((state)=>state["Home"]["HomeImage"]);
const HomeImageIoProps = useIoStore((state)=>state["Home"]["HomeImage"]);
const HomeImageCb = useHomeImageCb()
const CategoryMenuTextProps = useStore((state)=>state["Home"]["CategoryMenuText"]);
const CategoryMenuTextIoProps = useIoStore((state)=>state["Home"]["CategoryMenuText"]);
const CategoryMenuTextCb = useCategoryMenuTextCb()
const CategoryMenuButton1Props = useStore((state)=>state["Home"]["CategoryMenuButton1"]);
const CategoryMenuButton1IoProps = useIoStore((state)=>state["Home"]["CategoryMenuButton1"]);
const CategoryMenuButton1Cb = useCategoryMenuButton1Cb()
const CategoryMenuButton2Props = useStore((state)=>state["Home"]["CategoryMenuButton2"]);
const CategoryMenuButton2IoProps = useIoStore((state)=>state["Home"]["CategoryMenuButton2"]);
const CategoryMenuButton2Cb = useCategoryMenuButton2Cb()
const CategoryImage1Props = useStore((state)=>state["Home"]["CategoryImage1"]);
const CategoryImage1IoProps = useIoStore((state)=>state["Home"]["CategoryImage1"]);
const CategoryImage1Cb = useCategoryImage1Cb()
const OptionName1Props = useStore((state)=>state["Home"]["OptionName1"]);
const OptionName1IoProps = useIoStore((state)=>state["Home"]["OptionName1"]);
const OptionName1Cb = useOptionName1Cb()
const Description1Props = useStore((state)=>state["Home"]["Description1"]);
const Description1IoProps = useIoStore((state)=>state["Home"]["Description1"]);
const Description1Cb = useDescription1Cb()
const ExploreOption1Props = useStore((state)=>state["Home"]["ExploreOption1"]);
const ExploreOption1IoProps = useIoStore((state)=>state["Home"]["ExploreOption1"]);
const ExploreOption1Cb = useExploreOption1Cb()
const CategoryImage2Props = useStore((state)=>state["Home"]["CategoryImage2"]);
const CategoryImage2IoProps = useIoStore((state)=>state["Home"]["CategoryImage2"]);
const CategoryImage2Cb = useCategoryImage2Cb()
const OptionName2Props = useStore((state)=>state["Home"]["OptionName2"]);
const OptionName2IoProps = useIoStore((state)=>state["Home"]["OptionName2"]);
const OptionName2Cb = useOptionName2Cb()
const Description2Props = useStore((state)=>state["Home"]["Description2"]);
const Description2IoProps = useIoStore((state)=>state["Home"]["Description2"]);
const Description2Cb = useDescription2Cb()
const ExploreOption2Props = useStore((state)=>state["Home"]["ExploreOption2"]);
const ExploreOption2IoProps = useIoStore((state)=>state["Home"]["ExploreOption2"]);
const ExploreOption2Cb = useExploreOption2Cb()
const CategoryImage3Props = useStore((state)=>state["Home"]["CategoryImage3"]);
const CategoryImage3IoProps = useIoStore((state)=>state["Home"]["CategoryImage3"]);
const CategoryImage3Cb = useCategoryImage3Cb()
const OptionName3Props = useStore((state)=>state["Home"]["OptionName3"]);
const OptionName3IoProps = useIoStore((state)=>state["Home"]["OptionName3"]);
const OptionName3Cb = useOptionName3Cb()
const Description3Props = useStore((state)=>state["Home"]["Description3"]);
const Description3IoProps = useIoStore((state)=>state["Home"]["Description3"]);
const Description3Cb = useDescription3Cb()
const ExploreOption3Props = useStore((state)=>state["Home"]["ExploreOption3"]);
const ExploreOption3IoProps = useIoStore((state)=>state["Home"]["ExploreOption3"]);
const ExploreOption3Cb = useExploreOption3Cb()
const CategoryImage4Props = useStore((state)=>state["Home"]["CategoryImage4"]);
const CategoryImage4IoProps = useIoStore((state)=>state["Home"]["CategoryImage4"]);
const CategoryImage4Cb = useCategoryImage4Cb()
const OptionName4Props = useStore((state)=>state["Home"]["OptionName4"]);
const OptionName4IoProps = useIoStore((state)=>state["Home"]["OptionName4"]);
const OptionName4Cb = useOptionName4Cb()
const Description4Props = useStore((state)=>state["Home"]["Description4"]);
const Description4IoProps = useIoStore((state)=>state["Home"]["Description4"]);
const Description4Cb = useDescription4Cb()
const ExploreOption4Props = useStore((state)=>state["Home"]["ExploreOption4"]);
const ExploreOption4IoProps = useIoStore((state)=>state["Home"]["ExploreOption4"]);
const ExploreOption4Cb = useExploreOption4Cb()
const AboutTextBox5Props = useStore((state)=>state["Home"]["AboutTextBox5"]);
const AboutTextBox5IoProps = useIoStore((state)=>state["Home"]["AboutTextBox5"]);
const AboutTextBox5Cb = useAboutTextBox5Cb()
const AboutTextBox6Props = useStore((state)=>state["Home"]["AboutTextBox6"]);
const AboutTextBox6IoProps = useIoStore((state)=>state["Home"]["AboutTextBox6"]);
const AboutTextBox6Cb = useAboutTextBox6Cb()
const AboutTextBox7Props = useStore((state)=>state["Home"]["AboutTextBox7"]);
const AboutTextBox7IoProps = useIoStore((state)=>state["Home"]["AboutTextBox7"]);
const AboutTextBox7Cb = useAboutTextBox7Cb()
const AboutButton1Props = useStore((state)=>state["Home"]["AboutButton1"]);
const AboutButton1IoProps = useIoStore((state)=>state["Home"]["AboutButton1"]);
const AboutButton1Cb = useAboutButton1Cb()
const AboutButton2Props = useStore((state)=>state["Home"]["AboutButton2"]);
const AboutButton2IoProps = useIoStore((state)=>state["Home"]["AboutButton2"]);
const AboutButton2Cb = useAboutButton2Cb()
const AboutImage1Props = useStore((state)=>state["Home"]["AboutImage1"]);
const AboutImage1IoProps = useIoStore((state)=>state["Home"]["AboutImage1"]);
const AboutImage1Cb = useAboutImage1Cb()
const AboutTextBox1Props = useStore((state)=>state["Home"]["AboutTextBox1"]);
const AboutTextBox1IoProps = useIoStore((state)=>state["Home"]["AboutTextBox1"]);
const AboutTextBox1Cb = useAboutTextBox1Cb()
const AboutImage2Props = useStore((state)=>state["Home"]["AboutImage2"]);
const AboutImage2IoProps = useIoStore((state)=>state["Home"]["AboutImage2"]);
const AboutImage2Cb = useAboutImage2Cb()
const AboutTextBox2Props = useStore((state)=>state["Home"]["AboutTextBox2"]);
const AboutTextBox2IoProps = useIoStore((state)=>state["Home"]["AboutTextBox2"]);
const AboutTextBox2Cb = useAboutTextBox2Cb()
const AboutImage3Props = useStore((state)=>state["Home"]["AboutImage3"]);
const AboutImage3IoProps = useIoStore((state)=>state["Home"]["AboutImage3"]);
const AboutImage3Cb = useAboutImage3Cb()
const AboutTextBox3Props = useStore((state)=>state["Home"]["AboutTextBox3"]);
const AboutTextBox3IoProps = useIoStore((state)=>state["Home"]["AboutTextBox3"]);
const AboutTextBox3Cb = useAboutTextBox3Cb()
const AboutImage4Props = useStore((state)=>state["Home"]["AboutImage4"]);
const AboutImage4IoProps = useIoStore((state)=>state["Home"]["AboutImage4"]);
const AboutImage4Cb = useAboutImage4Cb()
const AboutTextBox4Props = useStore((state)=>state["Home"]["AboutTextBox4"]);
const AboutTextBox4IoProps = useIoStore((state)=>state["Home"]["AboutTextBox4"]);
const AboutTextBox4Cb = useAboutTextBox4Cb()
const MenuTextBox1Props = useStore((state)=>state["Home"]["MenuTextBox1"]);
const MenuTextBox1IoProps = useIoStore((state)=>state["Home"]["MenuTextBox1"]);
const MenuTextBox1Cb = useMenuTextBox1Cb()
const MenuTextBox2Props = useStore((state)=>state["Home"]["MenuTextBox2"]);
const MenuTextBox2IoProps = useIoStore((state)=>state["Home"]["MenuTextBox2"]);
const MenuTextBox2Cb = useMenuTextBox2Cb()
const MenuImage1Props = useStore((state)=>state["Home"]["MenuImage1"]);
const MenuImage1IoProps = useIoStore((state)=>state["Home"]["MenuImage1"]);
const MenuImage1Cb = useMenuImage1Cb()
const ItemName1Props = useStore((state)=>state["Home"]["ItemName1"]);
const ItemName1IoProps = useIoStore((state)=>state["Home"]["ItemName1"]);
const ItemName1Cb = useItemName1Cb()
const ItemText1Props = useStore((state)=>state["Home"]["ItemText1"]);
const ItemText1IoProps = useIoStore((state)=>state["Home"]["ItemText1"]);
const ItemText1Cb = useItemText1Cb()
const PriceText1Props = useStore((state)=>state["Home"]["PriceText1"]);
const PriceText1IoProps = useIoStore((state)=>state["Home"]["PriceText1"]);
const PriceText1Cb = usePriceText1Cb()
const MenuImage2Props = useStore((state)=>state["Home"]["MenuImage2"]);
const MenuImage2IoProps = useIoStore((state)=>state["Home"]["MenuImage2"]);
const MenuImage2Cb = useMenuImage2Cb()
const ItemName2Props = useStore((state)=>state["Home"]["ItemName2"]);
const ItemName2IoProps = useIoStore((state)=>state["Home"]["ItemName2"]);
const ItemName2Cb = useItemName2Cb()
const ItemText2Props = useStore((state)=>state["Home"]["ItemText2"]);
const ItemText2IoProps = useIoStore((state)=>state["Home"]["ItemText2"]);
const ItemText2Cb = useItemText2Cb()
const PriceText2Props = useStore((state)=>state["Home"]["PriceText2"]);
const PriceText2IoProps = useIoStore((state)=>state["Home"]["PriceText2"]);
const PriceText2Cb = usePriceText2Cb()
const MenuImage3Props = useStore((state)=>state["Home"]["MenuImage3"]);
const MenuImage3IoProps = useIoStore((state)=>state["Home"]["MenuImage3"]);
const MenuImage3Cb = useMenuImage3Cb()
const ItemName3Props = useStore((state)=>state["Home"]["ItemName3"]);
const ItemName3IoProps = useIoStore((state)=>state["Home"]["ItemName3"]);
const ItemName3Cb = useItemName3Cb()
const ItemText3Props = useStore((state)=>state["Home"]["ItemText3"]);
const ItemText3IoProps = useIoStore((state)=>state["Home"]["ItemText3"]);
const ItemText3Cb = useItemText3Cb()
const PriceText3Props = useStore((state)=>state["Home"]["PriceText3"]);
const PriceText3IoProps = useIoStore((state)=>state["Home"]["PriceText3"]);
const PriceText3Cb = usePriceText3Cb()
const MenuImage4Props = useStore((state)=>state["Home"]["MenuImage4"]);
const MenuImage4IoProps = useIoStore((state)=>state["Home"]["MenuImage4"]);
const MenuImage4Cb = useMenuImage4Cb()
const ItemName4Props = useStore((state)=>state["Home"]["ItemName4"]);
const ItemName4IoProps = useIoStore((state)=>state["Home"]["ItemName4"]);
const ItemName4Cb = useItemName4Cb()
const ItemText4Props = useStore((state)=>state["Home"]["ItemText4"]);
const ItemText4IoProps = useIoStore((state)=>state["Home"]["ItemText4"]);
const ItemText4Cb = useItemText4Cb()
const PriceText4Props = useStore((state)=>state["Home"]["PriceText4"]);
const PriceText4IoProps = useIoStore((state)=>state["Home"]["PriceText4"]);
const PriceText4Cb = usePriceText4Cb()
const MenuImage5Props = useStore((state)=>state["Home"]["MenuImage5"]);
const MenuImage5IoProps = useIoStore((state)=>state["Home"]["MenuImage5"]);
const MenuImage5Cb = useMenuImage5Cb()
const ItemName5Props = useStore((state)=>state["Home"]["ItemName5"]);
const ItemName5IoProps = useIoStore((state)=>state["Home"]["ItemName5"]);
const ItemName5Cb = useItemName5Cb()
const ItemText5Props = useStore((state)=>state["Home"]["ItemText5"]);
const ItemText5IoProps = useIoStore((state)=>state["Home"]["ItemText5"]);
const ItemText5Cb = useItemText5Cb()
const PriceText5Props = useStore((state)=>state["Home"]["PriceText5"]);
const PriceText5IoProps = useIoStore((state)=>state["Home"]["PriceText5"]);
const PriceText5Cb = usePriceText5Cb()
const MenuImage6Props = useStore((state)=>state["Home"]["MenuImage6"]);
const MenuImage6IoProps = useIoStore((state)=>state["Home"]["MenuImage6"]);
const MenuImage6Cb = useMenuImage6Cb()
const ItemName6Props = useStore((state)=>state["Home"]["ItemName6"]);
const ItemName6IoProps = useIoStore((state)=>state["Home"]["ItemName6"]);
const ItemName6Cb = useItemName6Cb()
const ItemText6Props = useStore((state)=>state["Home"]["ItemText6"]);
const ItemText6IoProps = useIoStore((state)=>state["Home"]["ItemText6"]);
const ItemText6Cb = useItemText6Cb()
const PriceText6Props = useStore((state)=>state["Home"]["PriceText6"]);
const PriceText6IoProps = useIoStore((state)=>state["Home"]["PriceText6"]);
const PriceText6Cb = usePriceText6Cb()
const MenuImage7Props = useStore((state)=>state["Home"]["MenuImage7"]);
const MenuImage7IoProps = useIoStore((state)=>state["Home"]["MenuImage7"]);
const MenuImage7Cb = useMenuImage7Cb()
const ItemName7Props = useStore((state)=>state["Home"]["ItemName7"]);
const ItemName7IoProps = useIoStore((state)=>state["Home"]["ItemName7"]);
const ItemName7Cb = useItemName7Cb()
const ItemText7Props = useStore((state)=>state["Home"]["ItemText7"]);
const ItemText7IoProps = useIoStore((state)=>state["Home"]["ItemText7"]);
const ItemText7Cb = useItemText7Cb()
const PriceText7Props = useStore((state)=>state["Home"]["PriceText7"]);
const PriceText7IoProps = useIoStore((state)=>state["Home"]["PriceText7"]);
const PriceText7Cb = usePriceText7Cb()
const MenuImage8Props = useStore((state)=>state["Home"]["MenuImage8"]);
const MenuImage8IoProps = useIoStore((state)=>state["Home"]["MenuImage8"]);
const MenuImage8Cb = useMenuImage8Cb()
const ItemName8Props = useStore((state)=>state["Home"]["ItemName8"]);
const ItemName8IoProps = useIoStore((state)=>state["Home"]["ItemName8"]);
const ItemName8Cb = useItemName8Cb()
const ItemText8Props = useStore((state)=>state["Home"]["ItemText8"]);
const ItemText8IoProps = useIoStore((state)=>state["Home"]["ItemText8"]);
const ItemText8Cb = useItemText8Cb()
const PriceText8Props = useStore((state)=>state["Home"]["PriceText8"]);
const PriceText8IoProps = useIoStore((state)=>state["Home"]["PriceText8"]);
const PriceText8Cb = usePriceText8Cb()
const MenuButton2Props = useStore((state)=>state["Home"]["MenuButton2"]);
const MenuButton2IoProps = useIoStore((state)=>state["Home"]["MenuButton2"]);
const MenuButton2Cb = useMenuButton2Cb()
const MenuButton1Props = useStore((state)=>state["Home"]["MenuButton1"]);
const MenuButton1IoProps = useIoStore((state)=>state["Home"]["MenuButton1"]);
const MenuButton1Cb = useMenuButton1Cb()
const SpanImage1Props = useStore((state)=>state["Home"]["SpanImage1"]);
const SpanImage1IoProps = useIoStore((state)=>state["Home"]["SpanImage1"]);
const SpanImage1Cb = useSpanImage1Cb()
const SpanTextBox1Props = useStore((state)=>state["Home"]["SpanTextBox1"]);
const SpanTextBox1IoProps = useIoStore((state)=>state["Home"]["SpanTextBox1"]);
const SpanTextBox1Cb = useSpanTextBox1Cb()
const SpanTextBox2Props = useStore((state)=>state["Home"]["SpanTextBox2"]);
const SpanTextBox2IoProps = useIoStore((state)=>state["Home"]["SpanTextBox2"]);
const SpanTextBox2Cb = useSpanTextBox2Cb()
const SpanButton2Props = useStore((state)=>state["Home"]["SpanButton2"]);
const SpanButton2IoProps = useIoStore((state)=>state["Home"]["SpanButton2"]);
const SpanButton2Cb = useSpanButton2Cb()
const SpanButton1Props = useStore((state)=>state["Home"]["SpanButton1"]);
const SpanButton1IoProps = useIoStore((state)=>state["Home"]["SpanButton1"]);
const SpanButton1Cb = useSpanButton1Cb()
const ClientsTextBox1Props = useStore((state)=>state["Home"]["ClientsTextBox1"]);
const ClientsTextBox1IoProps = useIoStore((state)=>state["Home"]["ClientsTextBox1"]);
const ClientsTextBox1Cb = useClientsTextBox1Cb()
const ClientsTextBox2Props = useStore((state)=>state["Home"]["ClientsTextBox2"]);
const ClientsTextBox2IoProps = useIoStore((state)=>state["Home"]["ClientsTextBox2"]);
const ClientsTextBox2Cb = useClientsTextBox2Cb()
const ClientsTextBox3Props = useStore((state)=>state["Home"]["ClientsTextBox3"]);
const ClientsTextBox3IoProps = useIoStore((state)=>state["Home"]["ClientsTextBox3"]);
const ClientsTextBox3Cb = useClientsTextBox3Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Carousel2Props = useStore((state)=>state["Home"]["Carousel2"]);
const Carousel2IoProps = useIoStore((state)=>state["Home"]["Carousel2"]);
const Carousel2Cb = useCarousel2Cb()
const Carousel3Props = useStore((state)=>state["Home"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["Home"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const ClientsImage1Props = useStore((state)=>state["Home"]["ClientsImage1"]);
const ClientsImage1IoProps = useIoStore((state)=>state["Home"]["ClientsImage1"]);
const ClientsImage1Cb = useClientsImage1Cb()
const ClientsImage2Props = useStore((state)=>state["Home"]["ClientsImage2"]);
const ClientsImage2IoProps = useIoStore((state)=>state["Home"]["ClientsImage2"]);
const ClientsImage2Cb = useClientsImage2Cb()
const ClientsImage3Props = useStore((state)=>state["Home"]["ClientsImage3"]);
const ClientsImage3IoProps = useIoStore((state)=>state["Home"]["ClientsImage3"]);
const ClientsImage3Cb = useClientsImage3Cb()
const lientsTextBox3Props = useStore((state)=>state["Home"]["lientsTextBox3"]);
const lientsTextBox3IoProps = useIoStore((state)=>state["Home"]["lientsTextBox3"]);
const lientsTextBox3Cb = uselientsTextBox3Cb()
const ClientsTextBox4Props = useStore((state)=>state["Home"]["ClientsTextBox4"]);
const ClientsTextBox4IoProps = useIoStore((state)=>state["Home"]["ClientsTextBox4"]);
const ClientsTextBox4Cb = useClientsTextBox4Cb()
const ClientsImage4Props = useStore((state)=>state["Home"]["ClientsImage4"]);
const ClientsImage4IoProps = useIoStore((state)=>state["Home"]["ClientsImage4"]);
const ClientsImage4Cb = useClientsImage4Cb()
const ClientsTextBox5Props = useStore((state)=>state["Home"]["ClientsTextBox5"]);
const ClientsTextBox5IoProps = useIoStore((state)=>state["Home"]["ClientsTextBox5"]);
const ClientsTextBox5Cb = useClientsTextBox5Cb()
const ClientsTextBox6Props = useStore((state)=>state["Home"]["ClientsTextBox6"]);
const ClientsTextBox6IoProps = useIoStore((state)=>state["Home"]["ClientsTextBox6"]);
const ClientsTextBox6Cb = useClientsTextBox6Cb()
const ClientsButton1Props = useStore((state)=>state["Home"]["ClientsButton1"]);
const ClientsButton1IoProps = useIoStore((state)=>state["Home"]["ClientsButton1"]);
const ClientsButton1Cb = useClientsButton1Cb()
const ClientsButton2Props = useStore((state)=>state["Home"]["ClientsButton2"]);
const ClientsButton2IoProps = useIoStore((state)=>state["Home"]["ClientsButton2"]);
const ClientsButton2Cb = useClientsButton2Cb()
const MainHeadingProps = useStore((state)=>state["Home"]["MainHeading"]);
const MainHeadingIoProps = useIoStore((state)=>state["Home"]["MainHeading"]);
const MainHeadingCb = useMainHeadingCb()
const ArticlesLinkProps = useStore((state)=>state["Home"]["ArticlesLink"]);
const ArticlesLinkIoProps = useIoStore((state)=>state["Home"]["ArticlesLink"]);
const ArticlesLinkCb = useArticlesLinkCb()
const ArticleImage1Props = useStore((state)=>state["Home"]["ArticleImage1"]);
const ArticleImage1IoProps = useIoStore((state)=>state["Home"]["ArticleImage1"]);
const ArticleImage1Cb = useArticleImage1Cb()
const ArticleDate1Props = useStore((state)=>state["Home"]["ArticleDate1"]);
const ArticleDate1IoProps = useIoStore((state)=>state["Home"]["ArticleDate1"]);
const ArticleDate1Cb = useArticleDate1Cb()
const ArticleName1Props = useStore((state)=>state["Home"]["ArticleName1"]);
const ArticleName1IoProps = useIoStore((state)=>state["Home"]["ArticleName1"]);
const ArticleName1Cb = useArticleName1Cb()
const ArticleText1Props = useStore((state)=>state["Home"]["ArticleText1"]);
const ArticleText1IoProps = useIoStore((state)=>state["Home"]["ArticleText1"]);
const ArticleText1Cb = useArticleText1Cb()
const ArticleImage2Props = useStore((state)=>state["Home"]["ArticleImage2"]);
const ArticleImage2IoProps = useIoStore((state)=>state["Home"]["ArticleImage2"]);
const ArticleImage2Cb = useArticleImage2Cb()
const ArticleDate2Props = useStore((state)=>state["Home"]["ArticleDate2"]);
const ArticleDate2IoProps = useIoStore((state)=>state["Home"]["ArticleDate2"]);
const ArticleDate2Cb = useArticleDate2Cb()
const ArticleName2Props = useStore((state)=>state["Home"]["ArticleName2"]);
const ArticleName2IoProps = useIoStore((state)=>state["Home"]["ArticleName2"]);
const ArticleName2Cb = useArticleName2Cb()
const ArticleImage3Props = useStore((state)=>state["Home"]["ArticleImage3"]);
const ArticleImage3IoProps = useIoStore((state)=>state["Home"]["ArticleImage3"]);
const ArticleImage3Cb = useArticleImage3Cb()
const ArticleDate3Props = useStore((state)=>state["Home"]["ArticleDate3"]);
const ArticleDate3IoProps = useIoStore((state)=>state["Home"]["ArticleDate3"]);
const ArticleDate3Cb = useArticleDate3Cb()
const ArticleName3Props = useStore((state)=>state["Home"]["ArticleName3"]);
const ArticleName3IoProps = useIoStore((state)=>state["Home"]["ArticleName3"]);
const ArticleName3Cb = useArticleName3Cb()
const ArticleImage4Props = useStore((state)=>state["Home"]["ArticleImage4"]);
const ArticleImage4IoProps = useIoStore((state)=>state["Home"]["ArticleImage4"]);
const ArticleImage4Cb = useArticleImage4Cb()
const ArticleDate4Props = useStore((state)=>state["Home"]["ArticleDate4"]);
const ArticleDate4IoProps = useIoStore((state)=>state["Home"]["ArticleDate4"]);
const ArticleDate4Cb = useArticleDate4Cb()
const ArticleName4Props = useStore((state)=>state["Home"]["ArticleName4"]);
const ArticleName4IoProps = useIoStore((state)=>state["Home"]["ArticleName4"]);
const ArticleName4Cb = useArticleName4Cb()
const ArticleImage5Props = useStore((state)=>state["Home"]["ArticleImage5"]);
const ArticleImage5IoProps = useIoStore((state)=>state["Home"]["ArticleImage5"]);
const ArticleImage5Cb = useArticleImage5Cb()
const ArticleDate5Props = useStore((state)=>state["Home"]["ArticleDate5"]);
const ArticleDate5IoProps = useIoStore((state)=>state["Home"]["ArticleDate5"]);
const ArticleDate5Cb = useArticleDate5Cb()
const ArticleName5Props = useStore((state)=>state["Home"]["ArticleName5"]);
const ArticleName5IoProps = useIoStore((state)=>state["Home"]["ArticleName5"]);
const ArticleName5Cb = useArticleName5Cb()
const BookingText1Props = useStore((state)=>state["Home"]["BookingText1"]);
const BookingText1IoProps = useIoStore((state)=>state["Home"]["BookingText1"]);
const BookingText1Cb = useBookingText1Cb()
const BookingText2Props = useStore((state)=>state["Home"]["BookingText2"]);
const BookingText2IoProps = useIoStore((state)=>state["Home"]["BookingText2"]);
const BookingText2Cb = useBookingText2Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const BookingImage1Props = useStore((state)=>state["Home"]["BookingImage1"]);
const BookingImage1IoProps = useIoStore((state)=>state["Home"]["BookingImage1"]);
const BookingImage1Cb = useBookingImage1Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const BookingImage2Props = useStore((state)=>state["Home"]["BookingImage2"]);
const BookingImage2IoProps = useIoStore((state)=>state["Home"]["BookingImage2"]);
const BookingImage2Cb = useBookingImage2Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const BookingImage3Props = useStore((state)=>state["Home"]["BookingImage3"]);
const BookingImage3IoProps = useIoStore((state)=>state["Home"]["BookingImage3"]);
const BookingImage3Cb = useBookingImage3Cb()
const BookingFormButtonProps = useStore((state)=>state["Home"]["BookingFormButton"]);
const BookingFormButtonIoProps = useIoStore((state)=>state["Home"]["BookingFormButton"]);
const BookingFormButtonCb = useBookingFormButtonCb()
const TextBoxNoteProps = useStore((state)=>state["Home"]["TextBoxNote"]);
const TextBoxNoteIoProps = useIoStore((state)=>state["Home"]["TextBoxNote"]);
const TextBoxNoteCb = useTextBoxNoteCb()
const InputNoteProps = useStore((state)=>state["Home"]["InputNote"]);
const InputNoteIoProps = useIoStore((state)=>state["Home"]["InputNote"]);
const InputNoteCb = useInputNoteCb()
const TextBoxDateProps = useStore((state)=>state["Home"]["TextBoxDate"]);
const TextBoxDateIoProps = useIoStore((state)=>state["Home"]["TextBoxDate"]);
const TextBoxDateCb = useTextBoxDateCb()
const InputDateProps = useStore((state)=>state["Home"]["InputDate"]);
const InputDateIoProps = useIoStore((state)=>state["Home"]["InputDate"]);
const InputDateCb = useInputDateCb()
const TextBoxScheduleProps = useStore((state)=>state["Home"]["TextBoxSchedule"]);
const TextBoxScheduleIoProps = useIoStore((state)=>state["Home"]["TextBoxSchedule"]);
const TextBoxScheduleCb = useTextBoxScheduleCb()
const InputScheduleProps = useStore((state)=>state["Home"]["InputSchedule"]);
const InputScheduleIoProps = useIoStore((state)=>state["Home"]["InputSchedule"]);
const InputScheduleCb = useInputScheduleCb()
const TextBoxPhoneProps = useStore((state)=>state["Home"]["TextBoxPhone"]);
const TextBoxPhoneIoProps = useIoStore((state)=>state["Home"]["TextBoxPhone"]);
const TextBoxPhoneCb = useTextBoxPhoneCb()
const InputPhoneProps = useStore((state)=>state["Home"]["InputPhone"]);
const InputPhoneIoProps = useIoStore((state)=>state["Home"]["InputPhone"]);
const InputPhoneCb = useInputPhoneCb()
const TextBoxInputProps = useStore((state)=>state["Home"]["TextBoxInput"]);
const TextBoxInputIoProps = useIoStore((state)=>state["Home"]["TextBoxInput"]);
const TextBoxInputCb = useTextBoxInputCb()
const InputLocationProps = useStore((state)=>state["Home"]["InputLocation"]);
const InputLocationIoProps = useIoStore((state)=>state["Home"]["InputLocation"]);
const InputLocationCb = useInputLocationCb()
const TextBoxNameProps = useStore((state)=>state["Home"]["TextBoxName"]);
const TextBoxNameIoProps = useIoStore((state)=>state["Home"]["TextBoxName"]);
const TextBoxNameCb = useTextBoxNameCb()
const InputNameProps = useStore((state)=>state["Home"]["InputName"]);
const InputNameIoProps = useIoStore((state)=>state["Home"]["InputName"]);
const InputNameCb = useInputNameCb()
const TextBoxEmailProps = useStore((state)=>state["Home"]["TextBoxEmail"]);
const TextBoxEmailIoProps = useIoStore((state)=>state["Home"]["TextBoxEmail"]);
const TextBoxEmailCb = useTextBoxEmailCb()
const InputEmailProps = useStore((state)=>state["Home"]["InputEmail"]);
const InputEmailIoProps = useIoStore((state)=>state["Home"]["InputEmail"]);
const InputEmailCb = useInputEmailCb()
const MessageTextBoxProps = useStore((state)=>state["Home"]["MessageTextBox"]);
const MessageTextBoxIoProps = useIoStore((state)=>state["Home"]["MessageTextBox"]);
const MessageTextBoxCb = useMessageTextBoxCb()
const FollowTextBox1Props = useStore((state)=>state["Home"]["FollowTextBox1"]);
const FollowTextBox1IoProps = useIoStore((state)=>state["Home"]["FollowTextBox1"]);
const FollowTextBox1Cb = useFollowTextBox1Cb()
const FollowButtonProps = useStore((state)=>state["Home"]["FollowButton"]);
const FollowButtonIoProps = useIoStore((state)=>state["Home"]["FollowButton"]);
const FollowButtonCb = useFollowButtonCb()
const FollowImg2Props = useStore((state)=>state["Home"]["FollowImg2"]);
const FollowImg2IoProps = useIoStore((state)=>state["Home"]["FollowImg2"]);
const FollowImg2Cb = useFollowImg2Cb()
const FollowImg1Props = useStore((state)=>state["Home"]["FollowImg1"]);
const FollowImg1IoProps = useIoStore((state)=>state["Home"]["FollowImg1"]);
const FollowImg1Cb = useFollowImg1Cb()
const FollowImage3Props = useStore((state)=>state["Home"]["FollowImage3"]);
const FollowImage3IoProps = useIoStore((state)=>state["Home"]["FollowImage3"]);
const FollowImage3Cb = useFollowImage3Cb()
const FollowImage4Props = useStore((state)=>state["Home"]["FollowImage4"]);
const FollowImage4IoProps = useIoStore((state)=>state["Home"]["FollowImage4"]);
const FollowImage4Cb = useFollowImage4Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const FollowImage6Props = useStore((state)=>state["Home"]["FollowImage6"]);
const FollowImage6IoProps = useIoStore((state)=>state["Home"]["FollowImage6"]);
const FollowImage6Cb = useFollowImage6Cb()
const FooterLogoImageProps = useStore((state)=>state["Home"]["FooterLogoImage"]);
const FooterLogoImageIoProps = useIoStore((state)=>state["Home"]["FooterLogoImage"]);
const FooterLogoImageCb = useFooterLogoImageCb()
const FooterTextBox1Props = useStore((state)=>state["Home"]["FooterTextBox1"]);
const FooterTextBox1IoProps = useIoStore((state)=>state["Home"]["FooterTextBox1"]);
const FooterTextBox1Cb = useFooterTextBox1Cb()
const RatingStar1Props = useStore((state)=>state["Home"]["RatingStar1"]);
const RatingStar1IoProps = useIoStore((state)=>state["Home"]["RatingStar1"]);
const RatingStar1Cb = useRatingStar1Cb()
const RatingStar2Props = useStore((state)=>state["Home"]["RatingStar2"]);
const RatingStar2IoProps = useIoStore((state)=>state["Home"]["RatingStar2"]);
const RatingStar2Cb = useRatingStar2Cb()
const RatingStar3Props = useStore((state)=>state["Home"]["RatingStar3"]);
const RatingStar3IoProps = useIoStore((state)=>state["Home"]["RatingStar3"]);
const RatingStar3Cb = useRatingStar3Cb()
const RatingStar5Props = useStore((state)=>state["Home"]["RatingStar5"]);
const RatingStar5IoProps = useIoStore((state)=>state["Home"]["RatingStar5"]);
const RatingStar5Cb = useRatingStar5Cb()
const RatingStar4Props = useStore((state)=>state["Home"]["RatingStar4"]);
const RatingStar4IoProps = useIoStore((state)=>state["Home"]["RatingStar4"]);
const RatingStar4Cb = useRatingStar4Cb()
const FooterTextBox2Props = useStore((state)=>state["Home"]["FooterTextBox2"]);
const FooterTextBox2IoProps = useIoStore((state)=>state["Home"]["FooterTextBox2"]);
const FooterTextBox2Cb = useFooterTextBox2Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const InstagramLink4Props = useStore((state)=>state["Home"]["InstagramLink4"]);
const InstagramLink4IoProps = useIoStore((state)=>state["Home"]["InstagramLink4"]);
const InstagramLink4Cb = useInstagramLink4Cb()
const InstagramLink1Props = useStore((state)=>state["Home"]["InstagramLink1"]);
const InstagramLink1IoProps = useIoStore((state)=>state["Home"]["InstagramLink1"]);
const InstagramLink1Cb = useInstagramLink1Cb()
const InstagramLink2Props = useStore((state)=>state["Home"]["InstagramLink2"]);
const InstagramLink2IoProps = useIoStore((state)=>state["Home"]["InstagramLink2"]);
const InstagramLink2Cb = useInstagramLink2Cb()
const PageHeadingProps = useStore((state)=>state["Home"]["PageHeading"]);
const PageHeadingIoProps = useIoStore((state)=>state["Home"]["PageHeading"]);
const PageHeadingCb = usePageHeadingCb()
const Page1Props = useStore((state)=>state["Home"]["Page1"]);
const Page1IoProps = useIoStore((state)=>state["Home"]["Page1"]);
const Page1Cb = usePage1Cb()
const Page2Props = useStore((state)=>state["Home"]["Page2"]);
const Page2IoProps = useIoStore((state)=>state["Home"]["Page2"]);
const Page2Cb = usePage2Cb()
const Page3Props = useStore((state)=>state["Home"]["Page3"]);
const Page3IoProps = useIoStore((state)=>state["Home"]["Page3"]);
const Page3Cb = usePage3Cb()
const Page4Props = useStore((state)=>state["Home"]["Page4"]);
const Page4IoProps = useIoStore((state)=>state["Home"]["Page4"]);
const Page4Cb = usePage4Cb()
const Page5Props = useStore((state)=>state["Home"]["Page5"]);
const Page5IoProps = useIoStore((state)=>state["Home"]["Page5"]);
const Page5Cb = usePage5Cb()
const Page6Props = useStore((state)=>state["Home"]["Page6"]);
const Page6IoProps = useIoStore((state)=>state["Home"]["Page6"]);
const Page6Cb = usePage6Cb()
const Page7Props = useStore((state)=>state["Home"]["Page7"]);
const Page7IoProps = useIoStore((state)=>state["Home"]["Page7"]);
const Page7Cb = usePage7Cb()
const UtilityHeadingProps = useStore((state)=>state["Home"]["UtilityHeading"]);
const UtilityHeadingIoProps = useIoStore((state)=>state["Home"]["UtilityHeading"]);
const UtilityHeadingCb = useUtilityHeadingCb()
const Utility5Props = useStore((state)=>state["Home"]["Utility5"]);
const Utility5IoProps = useIoStore((state)=>state["Home"]["Utility5"]);
const Utility5Cb = useUtility5Cb()
const Utility6Props = useStore((state)=>state["Home"]["Utility6"]);
const Utility6IoProps = useIoStore((state)=>state["Home"]["Utility6"]);
const Utility6Cb = useUtility6Cb()
const Utility7Props = useStore((state)=>state["Home"]["Utility7"]);
const Utility7IoProps = useIoStore((state)=>state["Home"]["Utility7"]);
const Utility7Cb = useUtility7Cb()
const Utility4Props = useStore((state)=>state["Home"]["Utility4"]);
const Utility4IoProps = useIoStore((state)=>state["Home"]["Utility4"]);
const Utility4Cb = useUtility4Cb()
const Utility1Props = useStore((state)=>state["Home"]["Utility1"]);
const Utility1IoProps = useIoStore((state)=>state["Home"]["Utility1"]);
const Utility1Cb = useUtility1Cb()
const Utility3Props = useStore((state)=>state["Home"]["Utility3"]);
const Utility3IoProps = useIoStore((state)=>state["Home"]["Utility3"]);
const Utility3Cb = useUtility3Cb()
const Utility2Props = useStore((state)=>state["Home"]["Utility2"]);
const Utility2IoProps = useIoStore((state)=>state["Home"]["Utility2"]);
const Utility2Cb = useUtility2Cb()
const SponsorTextProps = useStore((state)=>state["Home"]["SponsorText"]);
const SponsorTextIoProps = useIoStore((state)=>state["Home"]["SponsorText"]);
const SponsorTextCb = useSponsorTextCb()
const SponsorImage1Props = useStore((state)=>state["Home"]["SponsorImage1"]);
const SponsorImage1IoProps = useIoStore((state)=>state["Home"]["SponsorImage1"]);
const SponsorImage1Cb = useSponsorImage1Cb()
const SponsorImage2Props = useStore((state)=>state["Home"]["SponsorImage2"]);
const SponsorImage2IoProps = useIoStore((state)=>state["Home"]["SponsorImage2"]);
const SponsorImage2Cb = useSponsorImage2Cb()
const SponsorImage4Props = useStore((state)=>state["Home"]["SponsorImage4"]);
const SponsorImage4IoProps = useIoStore((state)=>state["Home"]["SponsorImage4"]);
const SponsorImage4Cb = useSponsorImage4Cb()
const SponsorImage3Props = useStore((state)=>state["Home"]["SponsorImage3"]);
const SponsorImage3IoProps = useIoStore((state)=>state["Home"]["SponsorImage3"]);
const SponsorImage3Cb = useSponsorImage3Cb()

  return (<>
  <Div className="p-Home Navbar bpt" {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Flex className="p-Home NavbarFlex bpt" {...NavbarFlexProps} {...NavbarFlexCb} {...NavbarFlexIoProps}>
<Flex className="p-Home NavbarFlex1 bpt" {...NavbarFlex1Props} {...NavbarFlex1Cb} {...NavbarFlex1IoProps}>
<Image className="p-Home Logo bpt" {...LogoProps} {...LogoCb} {...LogoIoProps}/>
<Flex className="p-Home NavbarLinks bpt" {...NavbarLinksProps} {...NavbarLinksCb} {...NavbarLinksIoProps}>
<TextBox className="p-Home Link1 bpt" {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
<TextBox className="p-Home Link2 bpt" {...Link2Props} {...Link2Cb} {...Link2IoProps}/>
</Flex>
<TextBox className="p-Home Link3 bpt" {...Link3Props} {...Link3Cb} {...Link3IoProps}/>
<TextBox className="p-Home Link4 bpt" {...Link4Props} {...Link4Cb} {...Link4IoProps}/>
<TextBox className="p-Home Link5 bpt" {...Link5Props} {...Link5Cb} {...Link5IoProps}/>
</Flex>
<Flex className="p-Home NavbarFlex2 bpt" {...NavbarFlex2Props} {...NavbarFlex2Cb} {...NavbarFlex2IoProps}>
<Button className="p-Home NavbarButton1 bpt" {...NavbarButton1Props} {...NavbarButton1Cb} {...NavbarButton1IoProps}/>
<Button className="p-Home NavbarButton2 bpt" {...NavbarButton2Props} {...NavbarButton2Cb} {...NavbarButton2IoProps}/>
</Flex>
<Div className="p-Home NavbarDiv bpt" {...NavbarDivProps} {...NavbarDivCb} {...NavbarDivIoProps}>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Menu className="p-Home MenuIcon bpt" {...MenuIconProps} {...MenuIconCb} {...MenuIconIoProps}/>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Home bpt" {...HomeProps} {...HomeCb} {...HomeIoProps}>
<Flex className="p-Home HomeFlex bpt" {...HomeFlexProps} {...HomeFlexCb} {...HomeFlexIoProps}>
<Flex className="p-Home HomeFlex1 bpt" {...HomeFlex1Props} {...HomeFlex1Cb} {...HomeFlex1IoProps}>
<TextBox className="p-Home HomeText1 bpt" {...HomeText1Props} {...HomeText1Cb} {...HomeText1IoProps}/>
<TextBox className="p-Home HomeText2 bpt" {...HomeText2Props} {...HomeText2Cb} {...HomeText2IoProps}/>
<TextBox className="p-Home HomeText3 bpt" {...HomeText3Props} {...HomeText3Cb} {...HomeText3IoProps}/>
<Flex className="p-Home HomrFlex3 bpt" {...HomrFlex3Props} {...HomrFlex3Cb} {...HomrFlex3IoProps}>
<Button className="p-Home HomeButton1 bpt" {...HomeButton1Props} {...HomeButton1Cb} {...HomeButton1IoProps}/>
<Button className="p-Home HomeButton2 bpt" {...HomeButton2Props} {...HomeButton2Cb} {...HomeButton2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home HomeFlex2 bpt" {...HomeFlex2Props} {...HomeFlex2Cb} {...HomeFlex2IoProps}>
<Image className="p-Home HomeImage bpt" {...HomeImageProps} {...HomeImageCb} {...HomeImageIoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Sponsors bpt" {...SponsorsProps} {...SponsorsCb} {...SponsorsIoProps}>
<Flex className="p-Home SponsorFlex bpt" {...SponsorFlexProps} {...SponsorFlexCb} {...SponsorFlexIoProps}>
<TextBox className="p-Home SponsorText bpt" {...SponsorTextProps} {...SponsorTextCb} {...SponsorTextIoProps}/>
<Flex className="p-Home SponsorFlex1 bpt" {...SponsorFlex1Props} {...SponsorFlex1Cb} {...SponsorFlex1IoProps}>
<Flex className="p-Home SponsorFlex2 bpt" {...SponsorFlex2Props} {...SponsorFlex2Cb} {...SponsorFlex2IoProps}>
<Image className="p-Home SponsorImage1 bpt" {...SponsorImage1Props} {...SponsorImage1Cb} {...SponsorImage1IoProps}/>
<Image className="p-Home SponsorImage2 bpt" {...SponsorImage2Props} {...SponsorImage2Cb} {...SponsorImage2IoProps}/>
</Flex>
<Flex className="p-Home SponsorFlex3 bpt" {...SponsorFlex3Props} {...SponsorFlex3Cb} {...SponsorFlex3IoProps}>
<Image className="p-Home SponsorImage3 bpt" {...SponsorImage3Props} {...SponsorImage3Cb} {...SponsorImage3IoProps}/>
<Image className="p-Home SponsorImage4 bpt" {...SponsorImage4Props} {...SponsorImage4Cb} {...SponsorImage4IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Category bpt" {...CategoryProps} {...CategoryCb} {...CategoryIoProps}>
<Flex className="p-Home CategoryMenuFlex bpt" {...CategoryMenuFlexProps} {...CategoryMenuFlexCb} {...CategoryMenuFlexIoProps}>
<TextBox className="p-Home CategoryMenuText bpt" {...CategoryMenuTextProps} {...CategoryMenuTextCb} {...CategoryMenuTextIoProps}/>
<Flex className="p-Home CategoryMenuOptions bpt" {...CategoryMenuOptionsProps} {...CategoryMenuOptionsCb} {...CategoryMenuOptionsIoProps}>
<Flex className="p-Home OptionsFlex1 bpt" {...OptionsFlex1Props} {...OptionsFlex1Cb} {...OptionsFlex1IoProps}>
<Flex className="p-Home Option1 bpt" {...Option1Props} {...Option1Cb} {...Option1IoProps}>
<Image className="p-Home CategoryImage1 bpt" {...CategoryImage1Props} {...CategoryImage1Cb} {...CategoryImage1IoProps}/>
<TextBox className="p-Home OptionName1 bpt" {...OptionName1Props} {...OptionName1Cb} {...OptionName1IoProps}/>
<TextBox className="p-Home Description1 bpt" {...Description1Props} {...Description1Cb} {...Description1IoProps}/>
<TextBox className="p-Home ExploreOption1 bpt" {...ExploreOption1Props} {...ExploreOption1Cb} {...ExploreOption1IoProps}/>
</Flex>
<Flex className="p-Home Option2 bpt" {...Option2Props} {...Option2Cb} {...Option2IoProps}>
<Image className="p-Home CategoryImage2 bpt" {...CategoryImage2Props} {...CategoryImage2Cb} {...CategoryImage2IoProps}/>
<TextBox className="p-Home OptionName2 bpt" {...OptionName2Props} {...OptionName2Cb} {...OptionName2IoProps}/>
<TextBox className="p-Home Description2 bpt" {...Description2Props} {...Description2Cb} {...Description2IoProps}/>
<TextBox className="p-Home ExploreOption2 bpt" {...ExploreOption2Props} {...ExploreOption2Cb} {...ExploreOption2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home OptionsFlex2 bpt" {...OptionsFlex2Props} {...OptionsFlex2Cb} {...OptionsFlex2IoProps}>
<Flex className="p-Home Option3 bpt" {...Option3Props} {...Option3Cb} {...Option3IoProps}>
<Image className="p-Home CategoryImage3 bpt" {...CategoryImage3Props} {...CategoryImage3Cb} {...CategoryImage3IoProps}/>
<TextBox className="p-Home OptionName3 bpt" {...OptionName3Props} {...OptionName3Cb} {...OptionName3IoProps}/>
<TextBox className="p-Home Description3 bpt" {...Description3Props} {...Description3Cb} {...Description3IoProps}/>
<TextBox className="p-Home ExploreOption3 bpt" {...ExploreOption3Props} {...ExploreOption3Cb} {...ExploreOption3IoProps}/>
</Flex>
<Flex className="p-Home Option4 bpt" {...Option4Props} {...Option4Cb} {...Option4IoProps}>
<Image className="p-Home CategoryImage4 bpt" {...CategoryImage4Props} {...CategoryImage4Cb} {...CategoryImage4IoProps}/>
<TextBox className="p-Home OptionName4 bpt" {...OptionName4Props} {...OptionName4Cb} {...OptionName4IoProps}/>
<TextBox className="p-Home Description4 bpt" {...Description4Props} {...Description4Cb} {...Description4IoProps}/>
<TextBox className="p-Home ExploreOption4 bpt" {...ExploreOption4Props} {...ExploreOption4Cb} {...ExploreOption4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home CategoryButtons bpt" {...CategoryButtonsProps} {...CategoryButtonsCb} {...CategoryButtonsIoProps}>
<Button className="p-Home CategoryMenuButton1 bpt" {...CategoryMenuButton1Props} {...CategoryMenuButton1Cb} {...CategoryMenuButton1IoProps}/>
<Button className="p-Home CategoryMenuButton2 bpt" {...CategoryMenuButton2Props} {...CategoryMenuButton2Cb} {...CategoryMenuButton2IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}>
<Flex className="p-Home AboutUs bpt" {...AboutUsProps} {...AboutUsCb} {...AboutUsIoProps}>
<Flex className="p-Home AboutFlex1 bpt" {...AboutFlex1Props} {...AboutFlex1Cb} {...AboutFlex1IoProps}>
<Image className="p-Home AboutImage1 bpt" {...AboutImage1Props} {...AboutImage1Cb} {...AboutImage1IoProps}/>
<Flex className="p-Home AboutFlex3 bpt" {...AboutFlex3Props} {...AboutFlex3Cb} {...AboutFlex3IoProps}>
<TextBox className="p-Home AboutTextBox1 bpt" {...AboutTextBox1Props} {...AboutTextBox1Cb} {...AboutTextBox1IoProps}/>
<Flex className="p-Home AboutFlex4 bpt" {...AboutFlex4Props} {...AboutFlex4Cb} {...AboutFlex4IoProps}>
<Image className="p-Home AboutImage2 bpt" {...AboutImage2Props} {...AboutImage2Cb} {...AboutImage2IoProps}/>
<TextBox className="p-Home AboutTextBox2 bpt" {...AboutTextBox2Props} {...AboutTextBox2Cb} {...AboutTextBox2IoProps}/>
</Flex>
<Flex className="p-Home AboutFlex5 bpt" {...AboutFlex5Props} {...AboutFlex5Cb} {...AboutFlex5IoProps}>
<Image className="p-Home AboutImage3 bpt" {...AboutImage3Props} {...AboutImage3Cb} {...AboutImage3IoProps}/>
<TextBox className="p-Home AboutTextBox3 bpt" {...AboutTextBox3Props} {...AboutTextBox3Cb} {...AboutTextBox3IoProps}/>
</Flex>
<Flex className="p-Home AboutFlex6 bpt" {...AboutFlex6Props} {...AboutFlex6Cb} {...AboutFlex6IoProps}>
<Image className="p-Home AboutImage4 bpt" {...AboutImage4Props} {...AboutImage4Cb} {...AboutImage4IoProps}/>
<TextBox className="p-Home AboutTextBox4 bpt" {...AboutTextBox4Props} {...AboutTextBox4Cb} {...AboutTextBox4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home AboutFlex2 bpt" {...AboutFlex2Props} {...AboutFlex2Cb} {...AboutFlex2IoProps}>
<TextBox className="p-Home AboutTextBox5 bpt" {...AboutTextBox5Props} {...AboutTextBox5Cb} {...AboutTextBox5IoProps}/>
<TextBox className="p-Home AboutTextBox6 bpt" {...AboutTextBox6Props} {...AboutTextBox6Cb} {...AboutTextBox6IoProps}/>
<TextBox className="p-Home AboutTextBox7 bpt" {...AboutTextBox7Props} {...AboutTextBox7Cb} {...AboutTextBox7IoProps}/>
<Flex className="p-Home AboutFlex7 bpt" {...AboutFlex7Props} {...AboutFlex7Cb} {...AboutFlex7IoProps}>
<Button className="p-Home AboutButton1 bpt" {...AboutButton1Props} {...AboutButton1Cb} {...AboutButton1IoProps}/>
<Button className="p-Home AboutButton2 bpt" {...AboutButton2Props} {...AboutButton2Cb} {...AboutButton2IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Menu bpt" {...MenuProps} {...MenuCb} {...MenuIoProps}>
<Flex className="p-Home MenuFlex1 bpt" {...MenuFlex1Props} {...MenuFlex1Cb} {...MenuFlex1IoProps}>
<TextBox className="p-Home MenuTextBox1 bpt" {...MenuTextBox1Props} {...MenuTextBox1Cb} {...MenuTextBox1IoProps}/>
<TextBox className="p-Home MenuTextBox2 bpt" {...MenuTextBox2Props} {...MenuTextBox2Cb} {...MenuTextBox2IoProps}/>
<Flex className="p-Home MenuFlex2 bpt" {...MenuFlex2Props} {...MenuFlex2Cb} {...MenuFlex2IoProps}>
<Flex className="p-Home MenuFlex3 bpt" {...MenuFlex3Props} {...MenuFlex3Cb} {...MenuFlex3IoProps}>
<Flex className="p-Home MenuFlex6 bpt" {...MenuFlex6Props} {...MenuFlex6Cb} {...MenuFlex6IoProps}>
<Flex className="p-Home ItemFlex1 bpt" {...ItemFlex1Props} {...ItemFlex1Cb} {...ItemFlex1IoProps}>
<Flex className="p-Home ItemPrice1 bpt" {...ItemPrice1Props} {...ItemPrice1Cb} {...ItemPrice1IoProps}>
<TextBox className="p-Home PriceText1 bpt" {...PriceText1Props} {...PriceText1Cb} {...PriceText1IoProps}/>
</Flex>
<Image className="p-Home MenuImage1 bpt" {...MenuImage1Props} {...MenuImage1Cb} {...MenuImage1IoProps}/>
<TextBox className="p-Home ItemName1 bpt" {...ItemName1Props} {...ItemName1Cb} {...ItemName1IoProps}/>
<TextBox className="p-Home ItemText1 bpt" {...ItemText1Props} {...ItemText1Cb} {...ItemText1IoProps}/>
</Flex>
<Flex className="p-Home ItemFlex2 bpt" {...ItemFlex2Props} {...ItemFlex2Cb} {...ItemFlex2IoProps}>
<Flex className="p-Home ItemPrice2 bpt" {...ItemPrice2Props} {...ItemPrice2Cb} {...ItemPrice2IoProps}>
<TextBox className="p-Home PriceText2 bpt" {...PriceText2Props} {...PriceText2Cb} {...PriceText2IoProps}/>
</Flex>
<Image className="p-Home MenuImage2 bpt" {...MenuImage2Props} {...MenuImage2Cb} {...MenuImage2IoProps}/>
<TextBox className="p-Home ItemName2 bpt" {...ItemName2Props} {...ItemName2Cb} {...ItemName2IoProps}/>
<TextBox className="p-Home ItemText2 bpt" {...ItemText2Props} {...ItemText2Cb} {...ItemText2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home MenuFlex7 bpt" {...MenuFlex7Props} {...MenuFlex7Cb} {...MenuFlex7IoProps}>
<Flex className="p-Home ItemFlex3 bpt" {...ItemFlex3Props} {...ItemFlex3Cb} {...ItemFlex3IoProps}>
<Flex className="p-Home ItemPrice3 bpt" {...ItemPrice3Props} {...ItemPrice3Cb} {...ItemPrice3IoProps}>
<TextBox className="p-Home PriceText3 bpt" {...PriceText3Props} {...PriceText3Cb} {...PriceText3IoProps}/>
</Flex>
<Image className="p-Home MenuImage3 bpt" {...MenuImage3Props} {...MenuImage3Cb} {...MenuImage3IoProps}/>
<TextBox className="p-Home ItemName3 bpt" {...ItemName3Props} {...ItemName3Cb} {...ItemName3IoProps}/>
<TextBox className="p-Home ItemText3 bpt" {...ItemText3Props} {...ItemText3Cb} {...ItemText3IoProps}/>
</Flex>
<Flex className="p-Home ItemFlex4 bpt" {...ItemFlex4Props} {...ItemFlex4Cb} {...ItemFlex4IoProps}>
<Flex className="p-Home ItemPrice4 bpt" {...ItemPrice4Props} {...ItemPrice4Cb} {...ItemPrice4IoProps}>
<TextBox className="p-Home PriceText4 bpt" {...PriceText4Props} {...PriceText4Cb} {...PriceText4IoProps}/>
</Flex>
<Image className="p-Home MenuImage4 bpt" {...MenuImage4Props} {...MenuImage4Cb} {...MenuImage4IoProps}/>
<TextBox className="p-Home ItemName4 bpt" {...ItemName4Props} {...ItemName4Cb} {...ItemName4IoProps}/>
<TextBox className="p-Home ItemText4 bpt" {...ItemText4Props} {...ItemText4Cb} {...ItemText4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home MenuFlex4 bpt" {...MenuFlex4Props} {...MenuFlex4Cb} {...MenuFlex4IoProps}>
<Flex className="p-Home MenuFlex8 bpt" {...MenuFlex8Props} {...MenuFlex8Cb} {...MenuFlex8IoProps}>
<Flex className="p-Home ItemFlex5 bpt" {...ItemFlex5Props} {...ItemFlex5Cb} {...ItemFlex5IoProps}>
<Flex className="p-Home ItemPrice5 bpt" {...ItemPrice5Props} {...ItemPrice5Cb} {...ItemPrice5IoProps}>
<TextBox className="p-Home PriceText5 bpt" {...PriceText5Props} {...PriceText5Cb} {...PriceText5IoProps}/>
</Flex>
<Image className="p-Home MenuImage5 bpt" {...MenuImage5Props} {...MenuImage5Cb} {...MenuImage5IoProps}/>
<TextBox className="p-Home ItemName5 bpt" {...ItemName5Props} {...ItemName5Cb} {...ItemName5IoProps}/>
<TextBox className="p-Home ItemText5 bpt" {...ItemText5Props} {...ItemText5Cb} {...ItemText5IoProps}/>
</Flex>
<Flex className="p-Home ItemFlex bpt" {...ItemFlexProps} {...ItemFlexCb} {...ItemFlexIoProps}>
<Flex className="p-Home ItemPrice6 bpt" {...ItemPrice6Props} {...ItemPrice6Cb} {...ItemPrice6IoProps}>
<TextBox className="p-Home PriceText6 bpt" {...PriceText6Props} {...PriceText6Cb} {...PriceText6IoProps}/>
</Flex>
<Image className="p-Home MenuImage6 bpt" {...MenuImage6Props} {...MenuImage6Cb} {...MenuImage6IoProps}/>
<TextBox className="p-Home ItemName6 bpt" {...ItemName6Props} {...ItemName6Cb} {...ItemName6IoProps}/>
<TextBox className="p-Home ItemText6 bpt" {...ItemText6Props} {...ItemText6Cb} {...ItemText6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home MenuFlex9 bpt" {...MenuFlex9Props} {...MenuFlex9Cb} {...MenuFlex9IoProps}>
<Flex className="p-Home ItemFlex7 bpt" {...ItemFlex7Props} {...ItemFlex7Cb} {...ItemFlex7IoProps}>
<Flex className="p-Home ItemPrice7 bpt" {...ItemPrice7Props} {...ItemPrice7Cb} {...ItemPrice7IoProps}>
<TextBox className="p-Home PriceText7 bpt" {...PriceText7Props} {...PriceText7Cb} {...PriceText7IoProps}/>
</Flex>
<Image className="p-Home MenuImage7 bpt" {...MenuImage7Props} {...MenuImage7Cb} {...MenuImage7IoProps}/>
<TextBox className="p-Home ItemName7 bpt" {...ItemName7Props} {...ItemName7Cb} {...ItemName7IoProps}/>
<TextBox className="p-Home ItemText7 bpt" {...ItemText7Props} {...ItemText7Cb} {...ItemText7IoProps}/>
</Flex>
<Flex className="p-Home ItemFlex8 bpt" {...ItemFlex8Props} {...ItemFlex8Cb} {...ItemFlex8IoProps}>
<Flex className="p-Home ItemPrice8 bpt" {...ItemPrice8Props} {...ItemPrice8Cb} {...ItemPrice8IoProps}>
<TextBox className="p-Home PriceText8 bpt" {...PriceText8Props} {...PriceText8Cb} {...PriceText8IoProps}/>
</Flex>
<Image className="p-Home MenuImage8 bpt" {...MenuImage8Props} {...MenuImage8Cb} {...MenuImage8IoProps}/>
<TextBox className="p-Home ItemName8 bpt" {...ItemName8Props} {...ItemName8Cb} {...ItemName8IoProps}/>
<TextBox className="p-Home ItemText8 bpt" {...ItemText8Props} {...ItemText8Cb} {...ItemText8IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home MenuFlex5 bpt" {...MenuFlex5Props} {...MenuFlex5Cb} {...MenuFlex5IoProps}>
<Button className="p-Home MenuButton1 bpt" {...MenuButton1Props} {...MenuButton1Cb} {...MenuButton1IoProps}/>
<Button className="p-Home MenuButton2 bpt" {...MenuButton2Props} {...MenuButton2Cb} {...MenuButton2IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home BurgerSpan bpt" {...BurgerSpanProps} {...BurgerSpanCb} {...BurgerSpanIoProps}>
<Flex className="p-Home Burger_Span bpt" {...Burger_SpanProps} {...Burger_SpanCb} {...Burger_SpanIoProps}>
<Flex className="p-Home SpanFlex1 bpt" {...SpanFlex1Props} {...SpanFlex1Cb} {...SpanFlex1IoProps}>
<TextBox className="p-Home SpanTextBox1 bpt" {...SpanTextBox1Props} {...SpanTextBox1Cb} {...SpanTextBox1IoProps}/>
<TextBox className="p-Home SpanTextBox2 bpt" {...SpanTextBox2Props} {...SpanTextBox2Cb} {...SpanTextBox2IoProps}/>
<Flex className="p-Home SpanFlex2 bpt" {...SpanFlex2Props} {...SpanFlex2Cb} {...SpanFlex2IoProps}>
<Button className="p-Home SpanButton2 bpt" {...SpanButton2Props} {...SpanButton2Cb} {...SpanButton2IoProps}/>
<Button className="p-Home SpanButton1 bpt" {...SpanButton1Props} {...SpanButton1Cb} {...SpanButton1IoProps}/>
</Flex>
</Flex>
<Image className="p-Home SpanImage1 bpt" {...SpanImage1Props} {...SpanImage1Cb} {...SpanImage1IoProps}/>
</Flex>
</Div>
<Div className="p-Home Client bpt" {...ClientProps} {...ClientCb} {...ClientIoProps}>
<Div className="p-Home Clients bpt" {...ClientsProps} {...ClientsCb} {...ClientsIoProps}>
<Flex className="p-Home ClientsFlex1 bpt" {...ClientsFlex1Props} {...ClientsFlex1Cb} {...ClientsFlex1IoProps}>
<TextBox className="p-Home ClientsTextBox1 bpt" {...ClientsTextBox1Props} {...ClientsTextBox1Cb} {...ClientsTextBox1IoProps}/>
<TextBox className="p-Home ClientsTextBox2 bpt" {...ClientsTextBox2Props} {...ClientsTextBox2Cb} {...ClientsTextBox2IoProps}/>
<TextBox className="p-Home ClientsTextBox3 bpt" {...ClientsTextBox3Props} {...ClientsTextBox3Cb} {...ClientsTextBox3IoProps}/>
<Flex className="p-Home ClientsFlex2 bpt" {...ClientsFlex2Props} {...ClientsFlex2Cb} {...ClientsFlex2IoProps}>
<Image className="p-Home ClientsImage1 bpt" {...ClientsImage1Props} {...ClientsImage1Cb} {...ClientsImage1IoProps}/>
<Flex className="p-Home ClientsFlex3 bpt" {...ClientsFlex3Props} {...ClientsFlex3Cb} {...ClientsFlex3IoProps}>
<Image className="p-Home ClientsImage3 bpt" {...ClientsImage3Props} {...ClientsImage3Cb} {...ClientsImage3IoProps}/>
<TextBox className="p-Home lientsTextBox3 bpt" {...lientsTextBox3Props} {...lientsTextBox3Cb} {...lientsTextBox3IoProps}/>
<TextBox className="p-Home ClientsTextBox4 bpt" {...ClientsTextBox4Props} {...ClientsTextBox4Cb} {...ClientsTextBox4IoProps}/>
<Flex className="p-Home ClientFlex3 bpt" {...ClientFlex3Props} {...ClientFlex3Cb} {...ClientFlex3IoProps}>
<Image className="p-Home ClientsImage4 bpt" {...ClientsImage4Props} {...ClientsImage4Cb} {...ClientsImage4IoProps}/>
<Flex className="p-Home ClientFlex4 bpt" {...ClientFlex4Props} {...ClientFlex4Cb} {...ClientFlex4IoProps}>
<TextBox className="p-Home ClientsTextBox5 bpt" {...ClientsTextBox5Props} {...ClientsTextBox5Cb} {...ClientsTextBox5IoProps}/>
<TextBox className="p-Home ClientsTextBox6 bpt" {...ClientsTextBox6Props} {...ClientsTextBox6Cb} {...ClientsTextBox6IoProps}/>
</Flex>
</Flex>
</Flex>
<Image className="p-Home ClientsImage2 bpt" {...ClientsImage2Props} {...ClientsImage2Cb} {...ClientsImage2IoProps}/>
</Flex>
<Carousel className="p-Home Carousel2 bpt" {...Carousel2Props} {...Carousel2Cb} {...Carousel2IoProps}/>
<Carousel className="p-Home Carousel3 bpt" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<Carousel className="p-Home Carousel1 bpt" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Button className="p-Home ClientsButton1 bpt" {...ClientsButton1Props} {...ClientsButton1Cb} {...ClientsButton1IoProps}/>
<Button className="p-Home ClientsButton2 bpt" {...ClientsButton2Props} {...ClientsButton2Cb} {...ClientsButton2IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
<Div className="p-Home Articles bpt" {...ArticlesProps} {...ArticlesCb} {...ArticlesIoProps}>
<Flex className="p-Home ArticlesFlexBox bpt" {...ArticlesFlexBoxProps} {...ArticlesFlexBoxCb} {...ArticlesFlexBoxIoProps}>
<Flex className="p-Home ArticleFlexHeading bpt" {...ArticleFlexHeadingProps} {...ArticleFlexHeadingCb} {...ArticleFlexHeadingIoProps}>
<TextBox className="p-Home MainHeading bpt" {...MainHeadingProps} {...MainHeadingCb} {...MainHeadingIoProps}/>
<TextBox className="p-Home ArticlesLink bpt" {...ArticlesLinkProps} {...ArticlesLinkCb} {...ArticlesLinkIoProps}/>
</Flex>
<Flex className="p-Home ArticlesSection bpt" {...ArticlesSectionProps} {...ArticlesSectionCb} {...ArticlesSectionIoProps}>
<Flex className="p-Home ArticleFlex1 bpt" {...ArticleFlex1Props} {...ArticleFlex1Cb} {...ArticleFlex1IoProps}>
<Image className="p-Home ArticleImage1 bpt" {...ArticleImage1Props} {...ArticleImage1Cb} {...ArticleImage1IoProps}/>
<TextBox className="p-Home ArticleDate1 bpt" {...ArticleDate1Props} {...ArticleDate1Cb} {...ArticleDate1IoProps}/>
<TextBox className="p-Home ArticleName1 bpt" {...ArticleName1Props} {...ArticleName1Cb} {...ArticleName1IoProps}/>
<TextBox className="p-Home ArticleText1 bpt" {...ArticleText1Props} {...ArticleText1Cb} {...ArticleText1IoProps}/>
</Flex>
<Flex className="p-Home ArticleFlex2 bpt" {...ArticleFlex2Props} {...ArticleFlex2Cb} {...ArticleFlex2IoProps}>
<Flex className="p-Home ArticleFlexBox1 bpt" {...ArticleFlexBox1Props} {...ArticleFlexBox1Cb} {...ArticleFlexBox1IoProps}>
<Flex className="p-Home ArticleFlex3 bpt" {...ArticleFlex3Props} {...ArticleFlex3Cb} {...ArticleFlex3IoProps}>
<Image className="p-Home ArticleImage2 bpt" {...ArticleImage2Props} {...ArticleImage2Cb} {...ArticleImage2IoProps}/>
<TextBox className="p-Home ArticleDate2 bpt" {...ArticleDate2Props} {...ArticleDate2Cb} {...ArticleDate2IoProps}/>
<TextBox className="p-Home ArticleName2 bpt" {...ArticleName2Props} {...ArticleName2Cb} {...ArticleName2IoProps}/>
</Flex>
<Flex className="p-Home ArticleFlex4 bpt" {...ArticleFlex4Props} {...ArticleFlex4Cb} {...ArticleFlex4IoProps}>
<Image className="p-Home ArticleImage3 bpt" {...ArticleImage3Props} {...ArticleImage3Cb} {...ArticleImage3IoProps}/>
<TextBox className="p-Home ArticleDate3 bpt" {...ArticleDate3Props} {...ArticleDate3Cb} {...ArticleDate3IoProps}/>
<TextBox className="p-Home ArticleName3 bpt" {...ArticleName3Props} {...ArticleName3Cb} {...ArticleName3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ArticleFlexBox2 bpt" {...ArticleFlexBox2Props} {...ArticleFlexBox2Cb} {...ArticleFlexBox2IoProps}>
<Flex className="p-Home ArticleFlex5 bpt" {...ArticleFlex5Props} {...ArticleFlex5Cb} {...ArticleFlex5IoProps}>
<Image className="p-Home ArticleImage4 bpt" {...ArticleImage4Props} {...ArticleImage4Cb} {...ArticleImage4IoProps}/>
<TextBox className="p-Home ArticleDate4 bpt" {...ArticleDate4Props} {...ArticleDate4Cb} {...ArticleDate4IoProps}/>
<TextBox className="p-Home ArticleName4 bpt" {...ArticleName4Props} {...ArticleName4Cb} {...ArticleName4IoProps}/>
</Flex>
<Flex className="p-Home ArticleFlex6 bpt" {...ArticleFlex6Props} {...ArticleFlex6Cb} {...ArticleFlex6IoProps}>
<Image className="p-Home ArticleImage5 bpt" {...ArticleImage5Props} {...ArticleImage5Cb} {...ArticleImage5IoProps}/>
<TextBox className="p-Home ArticleDate5 bpt" {...ArticleDate5Props} {...ArticleDate5Cb} {...ArticleDate5IoProps}/>
<TextBox className="p-Home ArticleName5 bpt" {...ArticleName5Props} {...ArticleName5Cb} {...ArticleName5IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Booking bpt" {...BookingProps} {...BookingCb} {...BookingIoProps}>
<Flex className="p-Home BookingFlexbox bpt" {...BookingFlexboxProps} {...BookingFlexboxCb} {...BookingFlexboxIoProps}>
<Flex className="p-Home BookingFlex1 bpt" {...BookingFlex1Props} {...BookingFlex1Cb} {...BookingFlex1IoProps}>
<TextBox className="p-Home BookingText1 bpt" {...BookingText1Props} {...BookingText1Cb} {...BookingText1IoProps}/>
<TextBox className="p-Home BookingText2 bpt" {...BookingText2Props} {...BookingText2Cb} {...BookingText2IoProps}/>
<Flex className="p-Home ContacFlex1 bpt" {...ContacFlex1Props} {...ContacFlex1Cb} {...ContacFlex1IoProps}>
<Image className="p-Home BookingImage1 bpt" {...BookingImage1Props} {...BookingImage1Cb} {...BookingImage1IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Flex>
<Flex className="p-Home ContactFlex2 bpt" {...ContactFlex2Props} {...ContactFlex2Cb} {...ContactFlex2IoProps}>
<Image className="p-Home BookingImage2 bpt" {...BookingImage2Props} {...BookingImage2Cb} {...BookingImage2IoProps}/>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Flex>
<Flex className="p-Home ContactFlex3 bpt" {...ContactFlex3Props} {...ContactFlex3Cb} {...ContactFlex3IoProps}>
<Image className="p-Home BookingImage3 bpt" {...BookingImage3Props} {...BookingImage3Cb} {...BookingImage3IoProps}/>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home BookingFlex2 bpt" {...BookingFlex2Props} {...BookingFlex2Cb} {...BookingFlex2IoProps}>
<Flex className="p-Home BookingFlex3 bpt" {...BookingFlex3Props} {...BookingFlex3Cb} {...BookingFlex3IoProps}>
<Flex className="p-Home BookingFormFlex1 bpt" {...BookingFormFlex1Props} {...BookingFormFlex1Cb} {...BookingFormFlex1IoProps}>
<Flex className="p-Home FormName bpt" {...FormNameProps} {...FormNameCb} {...FormNameIoProps}>
<TextBox className="p-Home TextBoxName bpt" {...TextBoxNameProps} {...TextBoxNameCb} {...TextBoxNameIoProps}/>
<Input className="p-Home InputName bpt" {...InputNameProps} {...InputNameCb} {...InputNameIoProps}/>
</Flex>
<Flex className="p-Home FormEmail bpt" {...FormEmailProps} {...FormEmailCb} {...FormEmailIoProps}>
<TextBox className="p-Home TextBoxEmail bpt" {...TextBoxEmailProps} {...TextBoxEmailCb} {...TextBoxEmailIoProps}/>
<Input className="p-Home InputEmail bpt" {...InputEmailProps} {...InputEmailCb} {...InputEmailIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home BookingFormFlex2 bpt" {...BookingFormFlex2Props} {...BookingFormFlex2Cb} {...BookingFormFlex2IoProps}>
<Flex className="p-Home FormPhone bpt" {...FormPhoneProps} {...FormPhoneCb} {...FormPhoneIoProps}>
<TextBox className="p-Home TextBoxPhone bpt" {...TextBoxPhoneProps} {...TextBoxPhoneCb} {...TextBoxPhoneIoProps}/>
<Input className="p-Home InputPhone bpt" {...InputPhoneProps} {...InputPhoneCb} {...InputPhoneIoProps}/>
</Flex>
<Flex className="p-Home FormLocation bpt" {...FormLocationProps} {...FormLocationCb} {...FormLocationIoProps}>
<TextBox className="p-Home TextBoxInput bpt" {...TextBoxInputProps} {...TextBoxInputCb} {...TextBoxInputIoProps}/>
<Input className="p-Home InputLocation bpt" {...InputLocationProps} {...InputLocationCb} {...InputLocationIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home BookingFormFlex3 bpt" {...BookingFormFlex3Props} {...BookingFormFlex3Cb} {...BookingFormFlex3IoProps}>
<Flex className="p-Home FormDate bpt" {...FormDateProps} {...FormDateCb} {...FormDateIoProps}>
<TextBox className="p-Home TextBoxDate bpt" {...TextBoxDateProps} {...TextBoxDateCb} {...TextBoxDateIoProps}/>
<Input className="p-Home InputDate bpt" {...InputDateProps} {...InputDateCb} {...InputDateIoProps}/>
</Flex>
<Flex className="p-Home FormSchedule bpt" {...FormScheduleProps} {...FormScheduleCb} {...FormScheduleIoProps}>
<TextBox className="p-Home TextBoxSchedule bpt" {...TextBoxScheduleProps} {...TextBoxScheduleCb} {...TextBoxScheduleIoProps}/>
<Input className="p-Home InputSchedule bpt" {...InputScheduleProps} {...InputScheduleCb} {...InputScheduleIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home BookingFormFlex4 bpt" {...BookingFormFlex4Props} {...BookingFormFlex4Cb} {...BookingFormFlex4IoProps}>
<TextBox className="p-Home TextBoxNote bpt" {...TextBoxNoteProps} {...TextBoxNoteCb} {...TextBoxNoteIoProps}/>
<Input className="p-Home InputNote bpt" {...InputNoteProps} {...InputNoteCb} {...InputNoteIoProps}/>
</Flex>
<Button className="p-Home BookingFormButton bpt" {...BookingFormButtonProps} {...BookingFormButtonCb} {...BookingFormButtonIoProps}/>
<Div className="p-Home BookingFormMessage bpt" {...BookingFormMessageProps} {...BookingFormMessageCb} {...BookingFormMessageIoProps}>
<TextBox className="p-Home MessageTextBox bpt" {...MessageTextBoxProps} {...MessageTextBoxCb} {...MessageTextBoxIoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Follo bpt" {...FolloProps} {...FolloCb} {...FolloIoProps}>
<Div className="p-Home Follow bpt" {...FollowProps} {...FollowCb} {...FollowIoProps}>
<Flex className="p-Home FollowFlex1 bpt" {...FollowFlex1Props} {...FollowFlex1Cb} {...FollowFlex1IoProps}>
<TextBox className="p-Home FollowTextBox1 bpt" {...FollowTextBox1Props} {...FollowTextBox1Cb} {...FollowTextBox1IoProps}/>
<Button className="p-Home FollowButton bpt" {...FollowButtonProps} {...FollowButtonCb} {...FollowButtonIoProps}/>
</Flex>
<Flex className="p-Home FollowFlex2 bpt" {...FollowFlex2Props} {...FollowFlex2Cb} {...FollowFlex2IoProps}>
<Image className="p-Home FollowImg2 bpt" {...FollowImg2Props} {...FollowImg2Cb} {...FollowImg2IoProps}/>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Image className="p-Home FollowImg1 bpt" {...FollowImg1Props} {...FollowImg1Cb} {...FollowImg1IoProps}/>
</Flex>
<Flex className="p-Home FollowFlex3 bpt" {...FollowFlex3Props} {...FollowFlex3Cb} {...FollowFlex3IoProps}>
<Flex className="p-Home FollowFlex5 bpt" {...FollowFlex5Props} {...FollowFlex5Cb} {...FollowFlex5IoProps}>
<Image className="p-Home FollowImage3 bpt" {...FollowImage3Props} {...FollowImage3Cb} {...FollowImage3IoProps}/>
<Image className="p-Home FollowImage4 bpt" {...FollowImage4Props} {...FollowImage4Cb} {...FollowImage4IoProps}/>
</Flex>
<Flex className="p-Home FolowFlex5 bpt" {...FolowFlex5Props} {...FolowFlex5Cb} {...FolowFlex5IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home FollowImage6 bpt" {...FollowImage6Props} {...FollowImage6Cb} {...FollowImage6IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
</Div>
<Div className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home FooterFlex bpt" {...FooterFlexProps} {...FooterFlexCb} {...FooterFlexIoProps}>
<Flex className="p-Home FooterFlex1 bpt" {...FooterFlex1Props} {...FooterFlex1Cb} {...FooterFlex1IoProps}>
<Image className="p-Home FooterLogoImage bpt" {...FooterLogoImageProps} {...FooterLogoImageCb} {...FooterLogoImageIoProps}/>
<TextBox className="p-Home FooterTextBox1 bpt" {...FooterTextBox1Props} {...FooterTextBox1Cb} {...FooterTextBox1IoProps}/>
<Flex className="p-Home RatingFlex bpt" {...RatingFlexProps} {...RatingFlexCb} {...RatingFlexIoProps}>
<Image className="p-Home RatingStar1 bpt" {...RatingStar1Props} {...RatingStar1Cb} {...RatingStar1IoProps}/>
<Image className="p-Home RatingStar2 bpt" {...RatingStar2Props} {...RatingStar2Cb} {...RatingStar2IoProps}/>
<Image className="p-Home RatingStar3 bpt" {...RatingStar3Props} {...RatingStar3Cb} {...RatingStar3IoProps}/>
<Image className="p-Home RatingStar4 bpt" {...RatingStar4Props} {...RatingStar4Cb} {...RatingStar4IoProps}/>
<Image className="p-Home RatingStar5 bpt" {...RatingStar5Props} {...RatingStar5Cb} {...RatingStar5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FooterFlex2 bpt" {...FooterFlex2Props} {...FooterFlex2Cb} {...FooterFlex2IoProps}>
<Flex className="p-Home PageList bpt" {...PageListProps} {...PageListCb} {...PageListIoProps}>
<TextBox className="p-Home PageHeading bpt" {...PageHeadingProps} {...PageHeadingCb} {...PageHeadingIoProps}/>
<TextBox className="p-Home Page1 bpt" {...Page1Props} {...Page1Cb} {...Page1IoProps}/>
<TextBox className="p-Home Page2 bpt" {...Page2Props} {...Page2Cb} {...Page2IoProps}/>
<TextBox className="p-Home Page3 bpt" {...Page3Props} {...Page3Cb} {...Page3IoProps}/>
<TextBox className="p-Home Page4 bpt" {...Page4Props} {...Page4Cb} {...Page4IoProps}/>
<TextBox className="p-Home Page5 bpt" {...Page5Props} {...Page5Cb} {...Page5IoProps}/>
<TextBox className="p-Home Page6 bpt" {...Page6Props} {...Page6Cb} {...Page6IoProps}/>
<TextBox className="p-Home Page7 bpt" {...Page7Props} {...Page7Cb} {...Page7IoProps}/>
</Flex>
<Flex className="p-Home UtilityList bpt" {...UtilityListProps} {...UtilityListCb} {...UtilityListIoProps}>
<TextBox className="p-Home UtilityHeading bpt" {...UtilityHeadingProps} {...UtilityHeadingCb} {...UtilityHeadingIoProps}/>
<TextBox className="p-Home Utility1 bpt" {...Utility1Props} {...Utility1Cb} {...Utility1IoProps}/>
<TextBox className="p-Home Utility2 bpt" {...Utility2Props} {...Utility2Cb} {...Utility2IoProps}/>
<TextBox className="p-Home Utility3 bpt" {...Utility3Props} {...Utility3Cb} {...Utility3IoProps}/>
<TextBox className="p-Home Utility4 bpt" {...Utility4Props} {...Utility4Cb} {...Utility4IoProps}/>
<TextBox className="p-Home Utility5 bpt" {...Utility5Props} {...Utility5Cb} {...Utility5IoProps}/>
<TextBox className="p-Home Utility6 bpt" {...Utility6Props} {...Utility6Cb} {...Utility6IoProps}/>
<TextBox className="p-Home Utility7 bpt" {...Utility7Props} {...Utility7Cb} {...Utility7IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home InstagramLink3 bpt" {...InstagramLink3Props} {...InstagramLink3Cb} {...InstagramLink3IoProps}>
<TextBox className="p-Home FooterTextBox2 bpt" {...FooterTextBox2Props} {...FooterTextBox2Cb} {...FooterTextBox2IoProps}/>
<Flex className="p-Home InstagramLinkFlexBox bpt" {...InstagramLinkFlexBoxProps} {...InstagramLinkFlexBoxCb} {...InstagramLinkFlexBoxIoProps}>
<Flex className="p-Home InstagramLinkFlex1 bpt" {...InstagramLinkFlex1Props} {...InstagramLinkFlex1Cb} {...InstagramLinkFlex1IoProps}>
<Image className="p-Home InstagramLink1 bpt" {...InstagramLink1Props} {...InstagramLink1Cb} {...InstagramLink1IoProps}/>
<Image className="p-Home InstagramLink2 bpt" {...InstagramLink2Props} {...InstagramLink2Cb} {...InstagramLink2IoProps}/>
</Flex>
<Flex className="p-Home InstagramLinkFlex2 bpt" {...InstagramLinkFlex2Props} {...InstagramLinkFlex2Cb} {...InstagramLinkFlex2IoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<Image className="p-Home InstagramLink4 bpt" {...InstagramLink4Props} {...InstagramLink4Cb} {...InstagramLink4IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Div>
  </>);
}
