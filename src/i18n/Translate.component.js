import React from 'react';
import addD2Context from '../component-helpers/addD2Context';
import isString from 'd2-utilizr/lib/isString';
import isFunction from 'd2-utilizr/lib/isFunction';
import log from 'loglevel';

function hasAccessToD2TranslationFunction(context) {
    return context.d2 && context.d2.i18n && isFunction(context.d2.i18n.getTranslation);
}

function Translate(props, context) {
    if (!isString(props.children)) {
        log.error(`<Translate /> requires a string to be passed as a child in order for it to translate. e.g. <Translate>string_to_translate</Translate>`);
        return <span />;
    }

    if (!hasAccessToD2TranslationFunction(context)) {
        log.error('<Translate />: d2 is not available on the `context`');
        return <span />;
    }

    return (<span>{context.d2.i18n.getTranslation(props.children)}</span>);
}

export default addD2Context(Translate);
