describe('Plataforma_Nomina', () => {
    
    beforeEach('Test_LoginUser', () => {
        cy.fixture('Practicas/Parametros.json').then(siian => {
            cy.visit(siian.nomina);
            cy.get('[name=Username]').type(siian.userlogin); 
            cy.get('[name=Password]').type(siian.userpass) ;
            cy.get('[aria-label="INGRESAR"]').click()
            cy.get('#MenuButton_CD').click();
        });
    });
    afterEach('Logout_sesion',()=>{
        cy.wait(10000);
        cy.get('.right-button').click();
        cy.get('#CerrarSesionButton').click();
    });
    it('Val_Terceros_ListaPersonas',() => {
        cy.get('[style=""] > :nth-child(3) > :nth-child(1) > .dxtv-btn').click();
        cy.get(':nth-child(3) > ul[style=""] > :nth-child(3) > :nth-child(1) > .dxtv-btn').click();
        cy.get('#NavigationTreeViewSiian_N2_2_0').click();
        cy.get('#gridContainer', { timeout: 10000 }).should('be.visible');
    });
    it('Val_Contrato_Activo_Empleado',() => {
        cy.get(':nth-child(1) > :nth-child(10) > :nth-child(1) > .dxtv-btn').click();
        cy.get(':nth-child(10) > ul[style=""] > :nth-child(3) > :nth-child(1) > .dxtv-btn').click();
        cy.get('#NavigationTreeViewSiian_N9_2_1 > .dxtv-ndTxt').click();
        cy.get('.dx-datagrid-rowsview', { timeout: 10000 }).should('be.visible');
    })
    it('Val_Generar_Nomina', () => {
        cy.fixture('Practicas/DocNomina.json').then(datosGenerales => {
        cy.get(':nth-child(1) > :nth-child(10) > :nth-child(1) > .dxtv-btn').click();
        cy.get(':nth-child(10) > :nth-child(4) > :nth-child(2) > :nth-child(1) > .dxtv-btn').click();
        cy.get('#NavigationTreeViewSiian_N9_1_2 > .dxtv-ndTxt').click();
        cy.get('#MenuButton_CD').click();
        cy.get('#devextreme1 > .dx-button-content').click();
        cy.get(':nth-child(1) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-md > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > [style="display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;"] > .dx-box-flex > :nth-child(1) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').click().type('{selectall}{backspace}').type(datosGenerales.fechaInicial);              
        cy.get(':nth-child(1) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-md > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > [style="display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;"] > .dx-box-flex > :nth-child(2) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').click().type('{selectall}{backspace}').type(datosGenerales.fechaFinal);
        cy.get(':nth-child(1) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-md > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > [style="display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;"] > .dx-box-flex > :nth-child(3) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').click().type('{selectall}{backspace}').type(datosGenerales.nota);
        cy.get(':nth-child(2) > .dx-item-content > .dx-first-col > .dx-field-item-content > .dx-show-invalid-badge').click()
        cy.window().then((win) => {
            var form = win.$("#form").dxForm("instance"); // Instancia del formulario detalle
            form.getEditor("Contratos").option("value", datosGenerales.contratos);
        });  
        cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(1) > .dx-box-flex > :nth-child(1) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge').type(datosGenerales.sucursalDocumento).type('{downarrow}').type('{enter}')
        cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(1) > .dx-box-flex > :nth-child(2) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container').type(datosGenerales.tipoDocumento).type('{downarrow}').type('{enter}')
        cy.get('[style="display: flex; min-width: auto; flex: 2 1 0px;"] > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container').type(datosGenerales.tercero).type('{enter}').wait(600).type('{downarrow}').type('{enter}')
        cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(2) > .dx-box-flex > :nth-child(1) > .dx-item-content > .dx-first-col > .dx-field-item-content > .dx-show-invalid-badge').type(datosGenerales.multilibro).wait(500).type('{downarrow}').type('{enter}')
        cy.get(':nth-child(3) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > :nth-child(2) > .dx-box-flex > :nth-child(2) > .dx-item-content > .dx-last-row > .dx-field-item-content').type(datosGenerales.unidadNegocio).type('{downarrow}').type('{enter}')
        cy.get(':nth-child(2) > .dx-box-flex > :nth-child(3) > .dx-item-content > .dx-last-row > .dx-field-item-content > .dx-show-invalid-badge').type(datosGenerales.centroCostos).type('{downarrow}').type('{enter}')
        cy.get(':nth-child(4) > .dx-item-content > .dx-last-row > .dx-field-item-content > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container').type(datosGenerales.proyecto).type('{downarrow}').type('{enter}')
        cy.get(':nth-child(2) > .dx-box-flex > :nth-child(5) > .dx-box-item-content > .dx-last-col > .dx-field-item-content > .dx-show-invalid-badge').type(datosGenerales.controlFiscal).type('{downarrow}').type('{enter}')
        cy.get(':nth-child(4) > :nth-child(1) > .dx-first-col.dx-last-col > :nth-child(1) > .dx-form-group-with-caption > .dx-form-group-content > .dx-layout-manager > .dx-responsivebox-screen-sm > [style="display: flex; flex-direction: column; width: 100%; height: 100%; justify-content: flex-start; align-items: stretch;"] > [style="display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;"] > .dx-box-flex > :nth-child(1) > .dx-item-content > .dx-first-row > .dx-field-item-content > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container').type(datosGenerales.formaPago).wait(500).type('{downarrow}').type('{enter}')

        cy.get('#devextreme7 > .dx-button-content').click();
        cy.get('#devextreme8 > .dx-button-content').click();
        cy.get('#devextreme9 > .dx-button-content').click();
        cy.get('#devextreme10 > .dx-button-content').click();
        cy.get('#devextreme11 > .dx-button-content').click();
        

        
        });
    });

});