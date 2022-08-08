

    var nomeArquivo, doc, imagem, pasta;

    if(app.homeScreenVisible){
        alert("Nenhum arquivo aberto!");
    } else {
        pasta = ""; //Digite o caminho onde deseja salvar o arquivo 
                    //ou substitua por um Folder.selectDialog("mensagem aqui"), para selecionar a pasta

    
        nomeArquivo = prompt("Digite a referencia: ");
    
        if(nomeArquivo){
            doc = app.activeDocument;
            var arquivo = new File(pasta + nomeArquivo + ".jpg");
            var arqDesktop = new File('~/Desktop/' + nomeArquivo + ".jpg"); //seleciona a área de trabalho para salvar uma cópia
        
            if(arquivo.exists){
                if(confirm("Imagem já existe, deseja substituir?")){
                    
                    exportarArquivo(arquivo);
                    exportarDesktop(arqDesktop); //Isso salva uma cópia do arquivo no desktop, ou seja, pode ser removido
        
                } else {
                    alert("Operação cancelada!");
                }
            } else {
        
                exportarArquivo(arquivo);
                exportarDesktop(arqDesktop); //Isso salva uma cópia do arquivo no desktop, ou seja, pode ser removido
                
            }
        }
    }


function exportarArquivo(arquivo){
    var opcoes = new ExportOptionsJPEG();
    opcoes.artBoardClipping = true;
    opcoes.qualitySetting = 70;
    
    doc.exportFile(arquivo, ExportType.JPEG, opcoes);
}

function exportarDesktop(arqDesktop){
    var opcoes = new ExportOptionsJPEG();
    opcoes.artBoardClipping = true;
    opcoes.qualitySetting = 70;

    doc.exportFile(arqDesktop, ExportType.JPEG, opcoes);
}

