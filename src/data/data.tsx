import IconHome from 'assets/icons/sidebar-1.svg';
import IconLessons from 'assets/icons/sidebar-2.svg';
import IconQuestion from 'assets/icons/sidebar-3.svg';
import IconPracticeTests from 'assets/icons/sidebar-4.svg';
import IconGuidance from 'assets/icons/sidebar-5.svg';
import IconStatistics from 'assets/icons/sidebar-6.svg';
import IconAssessment from 'assets/icons/sidebar-7.svg';

import IconCozucu from 'assets/icons/cozucu.svg';
import IconKocumYanimda from 'assets/icons/kocum-yanimda.svg';
import IconSimdiAnladim from 'assets/icons/simdi-anladim.svg';

import IconFeedBack from 'assets/icons/feedback.svg';

export type MenuItemProps = {
  to: string;
  icon: JSX.Element;
  text: string;
  target?: '_blank' | '_self';
};

export const DATA_MENU_ITEMS: MenuItemProps[] = [
  {
    text: 'Home',
    to: '/',
    icon: <IconHome />,
  },
  {
    text: 'Dersler',
    to: '/',
    icon: <IconLessons />,
  },
  {
    text: 'Soru Bankası',
    to: '/',
    icon: <IconQuestion />,
  },
  {
    text: 'Deneme Sınavları',
    to: '/',
    icon: <IconPracticeTests />,
  },
  {
    text: 'Rehberlik Videoları',
    to: '/',
    icon: <IconGuidance />,
  },
  {
    text: 'İstatistikler',
    to: '/',
    icon: <IconStatistics />,
  },
  {
    text: 'Ölçme Değerlendirme',
    to: '/',
    icon: <IconAssessment />,
  },
];

export const DATA_APPS: MenuItemProps[] = [
  {
    text: 'Çözücü App',
    to: 'https://cozucu.app/en/',
    icon: <IconCozucu />,
    target: '_blank',
  },
  {
    text: 'Şimdi Anladım',
    to: 'https://www.simdianladim.com/en/',
    icon: <IconKocumYanimda />,
    target: '_blank',
  },
  {
    text: 'Koçum Yanımda',
    to: 'https://en.kocumyanimda.com/',
    icon: <IconSimdiAnladim />,
    target: '_blank',
  },
];

export const DATA_FEEDBACK: MenuItemProps = {
  text: 'FeedBack',
  to: 'https://www.dopingtech.net/',
  icon: <IconFeedBack />,
  target: '_blank',
};
