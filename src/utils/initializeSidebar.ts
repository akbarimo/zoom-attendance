const showSidebar = () => {
  const ui = HtmlService.createTemplateFromFile('src/sidebar/sidebar')
    .evaluate()
    .setTitle('Attendance Tool');
  SpreadsheetApp.getUi().showSidebar(ui);
};

const onOpen = () => {
  const dropdown = [
    {
      name: 'Show Tool',
      functionName: 'showSidebar',
    },
  ];
  spreadsheet.addMenu('Attendance Taker', dropdown);
};

const onInstall = () => {
  onOpen();
};
