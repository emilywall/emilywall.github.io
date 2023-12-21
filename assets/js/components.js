class Read extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="icon solid fa-book"></span>`;
	}
}

class Watch extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="icon solid fa-film"></span>`;
	}
}

class Listen extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="icon solid fa-headphones"></span>`;
	}
}

class Look extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="icon solid fa-eye"></span>`;
	}
}



class Opt extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-none">O</span>`;
	}
}

class Hack extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-group"><i>Hack</i> <span class="icon solid fa-laptop-code"></span></span>`;
	}
}

class Demo extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-group"><i>Demo</i> <span class="icon solid fa-chalkboard-teacher"></span></span>`;
	}
}

class Quiz extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-opt"><i>Quiz</i> <span class="icon solid fa-edit"></span></span>`;
	}
}

class OralExam extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-opt"><i>Oral Exam</i> <span class="icon solid fa-comments"></span></span>`;
	}
}

class NoPrep extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-none"><i>Ø No prep</i></span>`;
	}
}

class DS extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-sprint">DS</span>`;
	}
}

class DSStart extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-sprint">DS <span class="icon solid fa-circle"></span></span>`;
	}
}

class DSEnd extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-sprint">DS <span class="icon solid fa-times-circle"></span></span>`;
	}
}

class IA extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-flex">IA <span class="icon solid fa-edit"></span></span>`;
	}
}

class Break extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-break"><i>Break</i> <span class="icon solid fa-calendar-alt"></span></span>`;
	}
}

class NoLecture extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-break"><i>No Lecture</i> <span class="icon solid fa-calendar-alt"></span></span>`;
	}
}

class FlexDay extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-flex">Flex <span class="icon solid fa-edit"></span></span>`;
	}
}

class Guest extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-guest">Guest <span class="icon solid fa-user"></span></span>`;
	}
}

class Grad extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-guest">Grad Presentation <span class="icon solid fa-user"></span></span>`;
	}
}

class GroupMilestone extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-sprint">M <span class="icon solid fa-edit"></span></span>`;
	}
}

class PerformanceMilestone extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-sprint">M <span class="icon solid fa-theater-masks"></span></span>`;
	}
}

class PoetryMilestone extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-opt">M <span class="icon solid fa-feather"></span></span>`;
	}
}

class Homework extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<span class="label label-flex">HW <span class="icon solid fa-edit"></span></span>`;
	}
}







customElements.define('read-this', Read);
customElements.define('listen-this', Listen);
customElements.define('watch-this', Watch);
customElements.define('look-this', Look);
customElements.define('opt-this', Opt);
customElements.define('hack-day', Hack);
customElements.define('demo-day', Demo);
customElements.define('quiz-today', Quiz);
customElements.define('oral-exam', OralExam);
customElements.define('no-prep', NoPrep);
customElements.define('d-s', DS);
customElements.define('ds-start', DSStart);
customElements.define('ds-end', DSEnd);
customElements.define('i-a', IA);
customElements.define('break-today', Break);
customElements.define('no-lecture', NoLecture);
customElements.define('flex-day', FlexDay);
customElements.define('guest-today', Guest);
customElements.define('grad-presentation', Grad);
customElements.define('group-milestone', GroupMilestone);
customElements.define('perform-milestone', PerformanceMilestone);
customElements.define('poetry-milestone', PoetryMilestone);
customElements.define('hw-assignment', Homework);
