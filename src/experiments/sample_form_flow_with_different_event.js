/* eslint-disable no-undef */
(function() {
    console.log('Exp 2 is running')
    window.dynamicReactDataLayer = window.dynamicReactDataLayer || []
    window.dynamicReactDataLayer.push('REACT_AB_SET_STATE2')
    console.log('VWO is working')
    var btn = {
        type: 'button',
        keyP: 'defaultButton2',
        classes: 'btn-filled-sec-large ripple vwo_custom_btn',
        styles: { padding: '13px 20px', float: 'right'},
        label: 'Edit  Detail 2',
        cta: 'CUSTOM_BTN_EVENT_2'
    }
    function init() {
        console.log('calling init from second')
        window.dynamincData = {
            triggerOnMount: 'COMP_LOADED2',
            comps: [
                btn
            ]
        }
        var updateVwoDataEvent = new CustomEvent('REACT_AB_SET_STATE2', {
            detail: {
                show: true,
                dynamincData: {
                    triggerOnMount: 'COMP_LOADED2',
                    comps: [
                        btn
                    ]
                }
            }
        })
        window.dispatchEvent(updateVwoDataEvent)
    }
    window.removeEventListener('DYNAMIC_REACT_AB_MOUNTED', init)
    window.addEventListener('DYNAMIC_REACT_AB_MOUNTED', init)
    ///init()
}())
