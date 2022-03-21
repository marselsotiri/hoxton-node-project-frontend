import { useState } from 'react';

interface initialFormDataI {
    name?: string;
    phone?: string;
    email?: string;
    photo?: string;
    password?: string;
}

export function useForm(initialData: initialFormDataI) {
    const [formData, setFormData] = useState(initialData);
    const [stage, setStage] = useState(1);

    // function nextStage() {
    //     setStage((prevStage) => prevStage + 1);
    // }

    function onChange(e: any) {
        if (e.nativeEvent.data !== ' ')
            setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function changeInput(existing: string, newInput: string) {
        const input: null | HTMLInputElement = document.querySelector(
            `input[name=${existing}]`
        );
        if (!input) return;
        input.setAttribute('name', `${newInput}`);
        input.setAttribute(
            'type',
            `${newInput === 'email' ? 'text' : 'number'}`
        );
        input.setAttribute(
            'placeholder',
            `${newInput === 'email' ? 'xxx@' : '(+XXX)'}`
        );
        input.value = '';
        const label: HTMLLabelElement | null = document.querySelector(
            `label[for=${existing}]`
        );
        if (!label) return;
        label.setAttribute('for', `${newInput}`);
        if (label)
            label.textContent = `${newInput === 'email' ? 'Email' : 'Phone'}`;
        if (input) label.append(input);
        document.querySelector(
            '#changeInput'
        )!.textContent = `Log in with ${existing}`;
    }

    // function setInterestedIn(gender) {
    //     setFormData({ ...formData, interestedIn: gender });
    // }

    // function onBlurHandler(e, name, length) {
    //     if (
    //         formData[name].length < length &&
    //         !document.querySelector('span')?.classList.contains(name)
    //     ) {
    //         //shake input
    //         e.target.classList.add('shake');
    //         //display too short msg
    //         const tooShortSpan = document.createElement('span');
    //         tooShortSpan.classList.add('too-short', name);
    //         tooShortSpan.textContent =
    //             name === 'phone'
    //                 ? 'Phone number is too short.'
    //                 : capitalise(name) + ' is too short.';
    //         document
    //             .querySelector(`input[name=${name}]`)
    //             .parentNode.insertBefore(
    //                 tooShortSpan,
    //                 document.querySelector(`input[name=${name}]`).nextSibling
    //             );
    //         setTimeout((a) => {
    //             //remove msg and shake
    //             document.querySelector(`span.${name}`) &&
    //                 document.querySelector(`span.${name}`).remove();
    //             e.target.classList.remove('shake');
    //         }, 2000);
    //     }
    // }

    return {
        formData,
        onChange,
        // setInterestedIn,
        // onBlurHandler,
        stage,
        changeInput,
        // nextStage,
    };
}
