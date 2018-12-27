import { MdIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

// 导入 SVG 资源
export const loadSvgResource = (ir: MdIconRegistry, ds: DomSanitizer) =>{
    const imgDir = 'assets/image/';
    ir.addSvgIcon('logo',ds.bypassSecurityTrustResourceUrl(`${imgDir}logo.svg`));
    ir.addSvgIcon('setting',ds.bypassSecurityTrustResourceUrl(`${imgDir}setting.svg`));
    ir.addSvgIcon('coffee',ds.bypassSecurityTrustResourceUrl(`${imgDir}coffee.svg`));
}