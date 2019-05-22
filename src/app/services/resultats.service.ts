import { Subject } from 'rxjs/Subject'

export class ResultatsService {

    appareilSubject = new Subject<any[]>();

    private resultats = [
        {
            id: 1,
            equipe1: 'Brésil',
            score1: 0,
            equipe2: 'Allemagne',
            score2: 1
        },
        {
            id: 2,
            name: 'Télévision',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

    getAppareilById(id: number) {
        const appareil = this.resultats.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        return appareil;
    }
/*

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }


    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé'
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint'
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    } */
}