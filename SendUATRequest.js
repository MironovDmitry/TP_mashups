// JavaScript source code
var renderContent = function ($contentElement, context) {
    //$contentElement is jquery content element for my red control and context contains entity type and entity id
    //$contentElement.append('This is my content for ' + context.entity.type + ' #' + context.entity.id);

    //var tp_url = 'https://cis.tpondemand.com/api/v1';
    var tp_url = '';
    if (window.location.href.indexOf('RestUI') > 0) {
        tp_url = window.location.href.substring(0, window.location.href.indexOf('RestUI')) + 'api/v1';
    };
    console.log(tp_url);
    //var tp_url = 'https://targetprocess.aemedia.ru/TargetProcess2/api/v1';

    var entityType = '';

    if (context.entity.type === 'userStory') {
        entityType = 'UserStories';
    } else if (context.entity.type === 'bug') {
        entityType = 'Bugs';
    };
    //получаем тему
    var url = tp_url + '/' + entityType + '/' + context.entity.id + "/?include=[Name,Project]&format=json";
    //console.log(url);
    var title = '';
    var project = '';
    var projectName = '';
    var body = '';
    var requiredString = '';
    var subject = '';


    $.getJSON(url, function (data) {
        // получаем тему стори          
        title = data.Name;

        // получаем код проекта
        projectName = data.Project.Name;

        switch (data.Project.Name) {
            case '1С: HR':
                project = '1CHR: ';
                break;
            case '1С: Бит-Финанс':
                project = '1CBF: ';
                break;
            case '1С: Документооборот':
                project = '1CDOC: ';
                break;
            case '1С: Консолидация':
                project = '1CCON: ';
                break;
            case '1С: Медиа Контролер':
                project = '1CMK: ';
                break;
            case '1С: Медиа-Финансы':
                project = '1CMF: ';
                break;
            case 'DM short tasks':
                project = 'DMST: ';
                break;
        };

        subject = project + 'ЗАПРОС НА ТЕСТИРОВАНИЕ: ' + data.Name.replace(new RegExp('"', 'g'), "'");

        //console.log(subject);

        //body = '{имя заказчика}.';
        //body += '\r\n';
        body += '\r\n';
        body += 'Прошу вас протестировать изменения в системе "' + data.Project.Name + '", сделанные по вашей заявке.';
        body += '\r\n';
        body += 'Пожалуйста ответьте на данное письмо с результатами тестирования.';
        body += '\r\n';
        body += '\r\n';
        body += '--- Please do not remove this line! Aegis Media Ticket#{id} ---'.replace('{id}', context.entity.id);
        //console.log(body);
        body = encodeURIComponent(body);

        //var mailto = 'mailto:support@aemedia.ru?subject='+ subject + '&body=' + body;
        var tp_email = '';
        if (tp_url.indexOf('aemedia.ru') > -1) {
            tp_email = 'support@aemedia.ru';
        } else {
            tp_email = 'dan.tpondemand@gmail.com';
        };

        var mailto = 'mailto:' + tp_email + '?subject=' + subject + '&body=' + body;
        //console.log(mailto);
        //console.log(mailto.length);
        $contentElement.append('<div class="mailto"><a href="' + mailto + '">Запрос на тестирование</a></div>');
    });


};

var renderHeader = function ($headerElement, context) {
    //$headerElement is jquery header element for my red control and context contains entity type and entity id
    $('.ui-label', $headerElement).css({ "color": '#444c52' });
};

//Append my controls to user story view
tau.mashups.addDependency('tp/userStory/view')
    .addMashup(function (view) {
        //view.addTab('Red Tab', renderContent, renderHeader)
        //.addBlock('Red Block', renderContent, renderHeader);
        view.addBlock('Запросы', renderContent, renderHeader);
    });

//Append my controls to bug view
tau.mashups.addDependency('tp/bug/view')
    .addMashup(function (view) {
        //view.addTab('Red Tab', renderContent, renderHeader)
        view.addBlock('Запросы', renderContent, renderHeader);
    });

var onViewRendered = function ($element, context) {
    //I don't need the switcher to old look since I fell in love with new one :)
    $element.find('.tau-look-switcher').hide(); //find and hide switcher to old look
};

tau.mashups.addDependency('tp/userStory/view')
    .addMashup(function (view) {
        //sign up here on render event for user story view
        view.onRender(onViewRendered);
    });

tau.mashups.addDependency('libs/jquery/jquery')
    .addMashup(function () {


    });
