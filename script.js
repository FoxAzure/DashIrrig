const buttons = document.querySelectorAll('button');
const iframe = document.getElementById('iframe');

const links = [
    { name: 'Resumo Pressões', link: 'https://app.powerbi.com/view?r=eyJrIjoiNzRkZDEwN2UtMGZlYS00OWFiLWFkMjQtMmQ4YWVjZjg1MDBlIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9' },
    { name: 'Avaliação Campo Gotejo', link: 'https://app.powerbi.com/view?r=eyJrIjoiZjk0YTNjNzQtNjNjOC00ZTgzLTg0YWMtZDAwZTE3ZTk2YmFmIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9' },
    { name: 'Avaliação Casa de bomba', link: 'https://app.powerbi.com/view?r=eyJrIjoiYjNjNzJiNDQtNTM4ZS00ODE0LTg2MWQtZjdhMTMxNmQ5YzRiIiwidCI6IjdkYjQwZjM0LTk1MzYtNGJiNC1iODVhLThhZDViMjEwODU0OCJ9' }
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        iframe.src = links[index].link;
        document.title = `Irrigação - ${links[index].name}`;
    });
});
