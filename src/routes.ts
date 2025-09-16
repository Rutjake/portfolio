import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faGraduationCap, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface RouteItem {
  path: string;
  title: string;
  Icon: IconDefinition;
}

export const routes: RouteItem[] = [
  { path: '/', title: 'Etusivu', Icon: faHome },
  { path: '/education', title: 'Koulutus/Työ', Icon: faGraduationCap },
  { path: '/projects', title: 'Projektit', Icon: faCodeBranch },
  { path: '/contact', title: 'Yhteystiedot', Icon: faEnvelope },
];
