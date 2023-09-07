/*
describe('My First Test', () => {
    function incrementarFecha(fecha,meses){
      const nuevaFecha = new Date(fecha);
      nuevaFecha.setMonth(nuevaFecha.getMonth()+meses);
    return nuevaFecha;
    }
    it('Cargar pagina "Conceptos" con diferentes datos', () => {
      cy.fixture('dataLoginNomina.json').then(datos1 => {
        cy.visit('http://nomina.siian.co/')
          cy.get(':nth-child(4) > .dx-field-value > .form-control').type(datos1.usuario)
          cy.get(':nth-child(6) > .dx-field-value > .form-control').type(datos1.contraseña)
          cy.get('.dx-button-content').click()
          cy.get('#MenuButton_CD').click()
        
      cy.fixture('dataGeneralNomina.json').then(datos2 => {
        cy.get('ul[style=""] > :nth-child(10) > :nth-child(1) > .dxtv-btn').click()
          cy.get('ul[style=""] > :nth-child(1) > :nth-child(1) > .dxtv-btn').click()
          cy.get('#NavigationTreeViewSiian_N9_0_2 > .dxtv-ndTxt').click()
          cy.get(':nth-child(10) > :nth-child(4) > :nth-child(2) > :nth-child(1) > .dxtv-btn').click()
          cy.get('#NavigationTreeViewSiian_N9_1_2 > .dxtv-ndTxt').click()
          cy.get('#MenuButton_CD').click()
          cy.get('#devextreme1 > .dx-button-content').click()
          
          cy.get(':nth-child(2) > .dx-item-content > .dx-first-col > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.ContratoID).type('{downarrow}').type('{enter}');
          cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(1) > .dx-box-flex > :nth-child(1) > .dx-box-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.sucursalDocumento).type('{downarrow}').type('{enter}')
          cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(1) > .dx-box-flex > :nth-child(2) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.tipoDocumento).type('{downarrow}').type('{enter}')
          cy.get('[style="display: flex; min-width: auto; flex: 2 1 0px;"] > .dx-box-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.tercero).type('{enter}').wait(600).type('{downarrow}').type('{enter}')
          cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(2) > .dx-box-flex > :nth-child(1) > .dx-item-content > .dx-first-col > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.multilibro).type('{downarrow}').type('{enter}')
  
          cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(2) > .dx-box-flex > :nth-child(2) > .dx-box-item-content > .dx-last-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.unidadNegocio).type('{downarrow}').type('{enter}')
          cy.get(':nth-child(2) > .dx-box-flex > :nth-child(3) > .dx-box-item-content > .dx-last-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.centroCostos).type('{downarrow}').type('{enter}')
          cy.get(':nth-child(2) > .dx-box-flex > :nth-child(4) > .dx-box-item-content > .dx-last-row > .dx-field-item-content').type(datos2.proyecto).type('{enter}').type('{enter}')
          cy.get(':nth-child(2) > .dx-box-flex > :nth-child(5) > .dx-box-item-content > .dx-last-col > .dx-field-item-content').type(datos2.controlFiscal).type('{enter}').type('{enter}')
          //cy.get(':nth-child(4) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > [style="display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;"] > .dx-box-flex > :nth-child(1) > .dx-box-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.formaPago).type('{enter}').wait(600).type('{downarrow}').type('{enter}');

          const fechaInicial = new Date(datos2.fechaInicial);
          const fechaFinal = new Date(datos2.fechaFinal);
          let fechaActual = fechaInicial;

          while (fechaActual <= fechaFinal){
          const fechaFormateada = fechaActual.toLocaleDateString();
          cy.get(':nth-child(1) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}').type(datos2.fechaFormateada).type('{enter}');
          cy.get('#devextreme7 > .dx-button-content').click();
          cy.get('#devextreme8 > .dx-button-content').click();
          cy.get('#devextreme9 > .dx-button-content').click();
          cy.get('#devextreme10 > .dx-button-content').click();
          cy.get('#devextreme11 > .dx-button-content').click();
          cy.get('.dx-tab-selected').click();
            fechaActual = incrementarFecha(fechaActual, 1);
          }
            //.get(':nth-child(1) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}').type(datos2.fechaInicial).type('{enter}')
         
          cy.wait(30000);
          cy.get('.right-button').click();
          cy.get('#CerrarSesionButton').click();
  
          });
        });  
      });  
    }); 
*/

describe('Nomina-AutoGenerateNewUser', () => {
    function incrementarFecha(fecha,meses){
      const nuevaFecha = new Date(fecha);
      nuevaFecha.setMonth(nuevaFecha.getMonth()+meses);
    return nuevaFecha;
    }
    it('Cargar pagina "Conceptos" con diferentes datos', () => {
          cy.fixture('dataLoginNomina.json').then(datos1 => {
            cy.visit('http://nomina.siian.co/')
            cy.get(':nth-child(4) > .dx-field-value > .form-control').type(datos1.usuario)
            cy.get(':nth-child(6) > .dx-field-value > .form-control').type(datos1.contraseña)
            cy.get('.dx-button-content').click()
            cy.get('#MenuButton_CD').click()
        
          cy.fixture('dataGeneralNomina.json').then(datos2 => {
            cy.get('ul[style=""] > :nth-child(10) > :nth-child(1) > .dxtv-btn').click()
            cy.get('ul[style=""] > :nth-child(1) > :nth-child(1) > .dxtv-btn').click()
            cy.get('#NavigationTreeViewSiian_N9_0_2 > .dxtv-ndTxt').click()
            cy.get(':nth-child(10) > :nth-child(4) > :nth-child(2) > :nth-child(1) > .dxtv-btn').click()
            cy.get('#NavigationTreeViewSiian_N9_1_2 > .dxtv-ndTxt').click()
            cy.get('#MenuButton_CD').click()
            cy.get('#devextreme1 > .dx-button-content').click()
            
            cy.get(':nth-child(2) > .dx-item-content > .dx-first-col > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.ContratoID).type('{downarrow}').type('{enter}');
            cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(1) > .dx-box-flex > :nth-child(1) > .dx-box-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.sucursalDocumento).type('{downarrow}').type('{enter}')
            cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(1) > .dx-box-flex > :nth-child(2) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.tipoDocumento).type('{downarrow}').type('{enter}')
            cy.get('[style="display: flex; min-width: auto; flex: 2 1 0px;"] > .dx-box-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.tercero).type('{enter}').wait(600).type('{downarrow}').type('{enter}')
            cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(2) > .dx-box-flex > :nth-child(1) > .dx-item-content > .dx-first-col > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.multilibro).wait(500).type('{downarrow}').type('{enter}')
    
            cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(2) > .dx-box-flex > :nth-child(2) > .dx-box-item-content > .dx-last-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.unidadNegocio).type('{downarrow}').type('{enter}')
            cy.get(':nth-child(2) > .dx-box-flex > :nth-child(3) > .dx-box-item-content > .dx-last-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.centroCostos).type('{downarrow}').type('{enter}')
            cy.get(':nth-child(2) > .dx-box-flex > :nth-child(4) > .dx-box-item-content > .dx-last-row > .dx-field-item-content').type(datos2.proyecto).type('{downarrow}').type('{enter}')
            cy.get(':nth-child(2) > .dx-box-flex > :nth-child(5) > .dx-box-item-content > .dx-last-col > .dx-field-item-content').type(datos2.controlFiscal).type('{downarrow}').type('{enter}')
          //cy.get(':nth-child(4) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > [style="display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;"] > .dx-box-flex > :nth-child(1) > .dx-box-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.formaPago).type('{enter}').wait(600).type('{downarrow}').type('{enter}');
          
            const fechaInicial = new Date(datos2.fechaInicial);
            const fechaFinal = new Date(datos2.fechaFinal);
            let fechaActual = new Date(fechaInicial);

            while (fechaActual <= fechaFinal) {
              const dia = fechaActual.getUTCDate();
              const mes = fechaActual.getUTCMonth() + 1;
              const año = fechaActual.getUTCFullYear();
        cy.debug()
              const fechaFormateada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${año}`;
              const notaMes = fechaActual.toLocaleDateString('en-ES', { year: 'numeric', month: '2-digit' });
              //cy.get(':nth-child(1) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-md > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > [style="display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;"] > .dx-box-flex > :nth-child(3) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datos2.nota + notaMes).type('{enter}');
              cy.get(':nth-child(1) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}').type(fechaFormateada).type('{enter}');
              cy.get('#devextreme7 > .dx-button-content').click();
              cy.get('#devextreme8 > .dx-button-content').click();  
              cy.get('#devextreme9 > .dx-button-content').click();
              cy.get('#devextreme10 > .dx-button-content').click();
              cy.get('#devextreme11 > .dx-button-content').click();
              cy.get('.dx-tab-selected').click();
              
              fechaActual.setUTCMonth(fechaActual.getUTCMonth() + 1);  
            }
              //.get(':nth-child(1) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}').type(datos2.fechaInicial).type('{enter}')
          
            cy.wait(30000)
              .get('.right-button').click()
              .get('#CerrarSesionButton').click()
              .wait(10000)
    
            });
        });  
    });  
}); 





