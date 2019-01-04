import { MdIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import * as _ from 'lodash'

// 导入 SVG 资源
export const loadSvgResource = (ir: MdIconRegistry, ds: DomSanitizer) =>{
    const avatarDir = `assets/avatar`;
    const iconDir = `assets/icons`;
    const imgDir = 'assets/img';
    const sidebarDir = `${imgDir}/sidebar`;
    const dayDir = `${imgDir}/days`;
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`))
      .addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`))
      .addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`))
      .addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`))
      .addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`))
      .addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`))
      .addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`))
      .addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`))
      .addSvgIcon('cmenu',ds.bypassSecurityTrustResourceUrl('assets/menu.svg'));
    const days = _.range(1, 31);
    days.forEach(day => ir.addSvgIcon(`day${day}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`)));
}