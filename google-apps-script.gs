/**
 * Google Apps Script para receber currículos do Imperador do Chopp
 * Suporta upload de PDF
 */

const FOLDER_ID = '1D_-xIDFQWl8F0eYI-qfMO-j1Q872JnAJ';

function doPost(e) {
  try {
    var folder = DriveApp.getFolderById(FOLDER_ID);
    var timestamp = new Date();
    
    var params = e.parameters;
    var nome = params.nome ? params.nome[0] : 'Sem nome';
    var telefone = params.telefone ? params.telefone[0] : '';
    var email = params.email ? params.email[0] : '';
    var mensagem = params.mensagem ? params.mensagem[0] : '';
    
    var content = '=== CURRÍCULO - IMPERADOR DO CHOPP ===\n';
    content += 'Data: ' + timestamp.toString() + '\n\n';
    content += 'Nome: ' + nome + '\n';
    content += 'Telefone: ' + telefone + '\n';
    content += 'Email: ' + email + '\n';
    content += 'Mensagem: ' + mensagem + '\n';
    
    var baseFileName = 'CV_' + nome.replace(/[^a-zA-Z0-9]/g, '_') + '_' + timestamp.getTime();
    
    folder.createFile(baseFileName + '.txt', content, MimeType.PLAIN_TEXT);
    
    // Salvar arquivo se existir
    if (e.postData && e.postData.contents) {
      var blob = Utilities.newBlob(e.postData.contents, 'application/pdf');
      if (blob.getBytes().length > 0) {
        folder.createFile(baseFileName + '.pdf', blob.getBytes(), 'application/pdf');
      }
    }
    
    return HtmlService.createHtmlOutput('OK');
    
  } catch (error) {
    return HtmlService.createHtmlOutput('Erro: ' + error.toString());
  }
}