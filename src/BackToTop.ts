import { Component, IComponentBindings, ComponentOptions, IAnalyticsActionCause, l } from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface IBackToTopOptions {
    shouldBeLocalized?: boolean;
    titleCaption?: string;
    textCaption?: string;
}

@lazyComponent
export class BackToTop extends Component {
    static ID = 'BackToTop';
    static options: IBackToTopOptions = {
        shouldBeLocalized: ComponentOptions.buildBooleanOption({ defaultValue: false }),
        titleCaption: ComponentOptions.buildLocalizedStringOption({ defaultValue: 'Back to Top' }),
        textCaption: ComponentOptions.buildLocalizedStringOption({ defaultValue: 'Back to Top' }),
    };

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
        let textValue = this.options.textCaption;
        let titleCaption = this.options.titleCaption;
        if (this.options.shouldBeLocalized) {
            textValue = l(textValue);
            titleCaption = l(titleCaption);
        }
        let toTopButton = Coveo.$$('button', { class: 'coveo-back-to-top', title: titleCaption }, textValue).el;

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