
// document.addEventListener('DOMContentLoaded', function () {
//     const leftArm = document.querySelector('.left-arm');
//     const boy = document.querySelector('.boy');

//     if (!leftArm || !boy) {
//         console.error('Элементы не найдены!');
//         return;
//     }

//     // Анимация руки
//     const armRect = leftArm.getBoundingClientRect();
//     const armCenterX = armRect.left + armRect.width * 0.5;
//     const armHeight = armRect.height;
//     const elbowPositionY = armRect.top + armHeight * 0.65;
//     const offsetX = armRect.width * 0.5;
//     const offsetY = armRect.height * 1.5;

//     gsap.set(leftArm, {
//         transformOrigin: `${offsetX}px ${elbowPositionY + offsetY}px`
//     });

//     gsap.to(leftArm, {
//         rotation: gsap.utils.random(-12, -8),
//         duration: gsap.utils.random(1.3, 1.7),
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//     });

//     // Анимация сжатия и растяжения для всего блока .boy
//     function animateBoy() {
//         gsap.to(boy, {
//             scaleX: 0.99,   // Сжимаем по горизонтали
//             scaleY: 0.995,  // Сжимаем по вертикали
//             duration: 0.3,
//             ease: "sine.out",
//             onComplete: () => {
//                 gsap.to(boy, {
//                     scaleX: 1.01,  // Немного растягиваем по горизонтали
//                     scaleY: 1.005, // Немного увеличиваем по вертикали
//                     duration: 0.4,
//                     ease: "sine.inOut",
//                     onComplete: () => {
//                         gsap.to(boy, {
//                             scaleX: 1,    // Восстанавливаем нормальное состояние
//                             scaleY: 1,    // Восстанавливаем нормальное состояние
//                             duration: 0.3,
//                             ease: "sine.in",
//                             onComplete: animateBoy // Запуск анимации снова
//                         });
//                     }
//                 });
//             }
//         });
//     }

//     animateBoy(); // Запускаем анимацию сжатия и растяжения
// });