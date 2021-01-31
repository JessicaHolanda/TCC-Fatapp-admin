import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageMessagesService {

    public customMessage: string = null;


    constructor() {
    }

    getMessage(key) {

        const messages = {
            // tslint:disable-next-line:max-line-length
            error_server: 'Houve um erro ao se comunicar com o servidor. Tente novamente mais tarde ou entre em contato com o nosso suporte',
            error_internet: 'Não há conexão com a internet',
            loading: 'Carregando...',
            wait: 'Por favor aguarde...',
            custom_message: this.customMessage,
        };

        if (messages.hasOwnProperty(key)) {
            return messages[key];
        }
        return '';
    }

    createCustomMessage(message) {
        this.customMessage = message;
        return this.getMessage('custom_message');
    }
}