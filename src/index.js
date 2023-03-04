let tl = gsap.timeline();

tl.from(".card:first-child", { opacity: 0, y: 70, duration: 0.5 });
tl.from(".card:last-child", { opacity: 0, y: 70, duration: 0.5 }, "=+.1");
tl.from(".message", { scale: 0, y: 100, duration: 0.5 }, "=+.1");
tl.from(".gmail", { scale: 0, x: 100, duration: 0.5 }, "=+.1");
