import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface RouteItem {
  path: string;
  title: string;
  Icon: IconDefinition;
}

export const routes: RouteItem[] = [
  { path: '/', title: 'Etusivu', Icon: faHome },
  { path: '/education', title: 'Koulutus', Icon: faUser },
  { path: '/projects', title: 'Projektit', Icon: faBriefcase },
  { path: '/contact', title: 'Yhteystiedot', Icon: faEnvelope },
];
