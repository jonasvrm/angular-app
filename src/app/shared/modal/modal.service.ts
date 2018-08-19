import { Injectable } from '@angular/core';
import { DomService } from '../dom/dom.service';

@Injectable()
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElementId = 'GeneralModalBody';
  private overlayElementId = 'overlay';

  init(component: any, inputs: object, outputs: object) {
    let componentConfig = {
      inputs:inputs,
      outputs:outputs
    }
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
  }

  destroy() {
    this.domService.removeComponent();
  }
}