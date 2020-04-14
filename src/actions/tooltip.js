export function tooltip(node, options) {
    let component;

    const attachTooltip = () => {
        console.log(node);
        component = new options.component({ 
            target: node.closest('ul'), 
            props: { text: options.text } 
        });
    };
    
    const removeTooltip = () => {
        component.$destroy();
    };

    node.addEventListener('mouseover', attachTooltip);
    node.addEventListener('mouseout', removeTooltip);

    return {
        destroy: () => {
            node.removeEventListener('mouseover', attachTooltip);
            node.removeEventListener('mouseout', removeTooltip);
        }
    }
}