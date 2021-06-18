import { Component, IComponentBindings, ComponentOptions, IAnalyticsActionCause } from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface IBackToTopOptions { }

@lazyComponent
export class BackToTop extends Component {
    static ID = 'BackToTop';
    static options: IBackToTopOptions = {};

    constructor(public element: HTMLElement, public options: IBackToTopOptions, public bindings: IComponentBindings) {
        super(element, BackToTop.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, BackToTop, options);

        this.render();
    }

    private toTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    public render() {

        let buttonText = Coveo.$$('div', { id: 'text' }, Coveo.l('BackToTop')).el;
        let toTopButton = Coveo.$$('button', { class: 'coveo-back-to-top' }, buttonText).el;

        Coveo.$$(toTopButton).on('click', () => {
            this.logCustomEvent();
            this.toTop();
        });

        this.element.appendChild(toTopButton);
    }

    protected logCustomEvent() {
        const actionCause: IAnalyticsActionCause = {
            name: 'backToTop',
            type: 'misc'
        };

        this.usageAnalytics.logCustomEvent(actionCause, {}, this.element);
    }
}