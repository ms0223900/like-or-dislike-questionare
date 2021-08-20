/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
const RootNode = document.getElementById('testApp');

class BasicNode {
  constructor({
    props = {},
    parentNode,
    children = [],
  }) {
    this.prevState = {};
    this.state = {};
    this.props = props;
    this.parentNode = parentNode;
    this.children = children;
    this.childrenParentNode = undefined;
    // this.node = document.createElement('div');
    // while (true) {
    //   if (JSON.stringify(this.prevState) !== JSON.stringify(this.nextState)) {
    //     this.node.innerHTML = this.render();
    //   }
    // }
  }

  // get children() {

  // }

  renderChildren() {
    if (this.childrenParentNode && this.children.length > 0) {
      this.children = this.children.map((Child) => (
        new Child({
          props: {
            ...this.props,
            ...this.state,
          },
          parentNode: this.childrenParentNode,
        })
      ));

      this.children.forEach((child) => {
        this.childrenParentNode.innerHTML += child.render();
      });
    }
  }

  get node() {
    if (this.parentNode) {
      this.el = this.parentNode;
      this.parentNode.innerHTML += this.render();
      this.registerHandlers && this.registerHandlers();
      this.componentDidMount && this.componentDidMount();
      // this.renderChildren();
      return this.el;
    }
    // this.el.innerHTML = this.render();
    return this.el;
  }

  update() {
    if (this.el) {
      this.el.innerHTML = this.render();
      this.registerHandlers();
      this.componentDidUpdated && this.componentDidUpdated();
    }
  }

  set state(newState) {
    // console.log(JSON.stringify(this.prevState),
    //   JSON.stringify(newState));
    if (JSON.stringify(this.prevState)
    !== JSON.stringify(newState)) {
      this.prevState = newState;
      // console.log(this.state, this.el);
      if (Object.keys(newState).length > 0) {
        this.update();
      }
    }
  }

  get state() {
    return this.prevState;
  }

  render() {
    return ``;
  }
}

class Content extends BasicNode {
  render() {
    return `
      <p>
        Content Here:
        ${this.props.content}
      </p>
    `;
  }
}

class Button extends BasicNode {
  constructor(props) {
    super(props);
    this.state = {
      num: 10,
    };
    // console.log(this.parentNode);
    this.children = [
      () => new Content({
        props: {
          content: this.state.num,
        },
      }),
    ];
  }

  _handleAdd = () => {
    this.state = {
      ...this.state,
      num: this.state.num + 10,
    };
  }

  registerHandlers() {
    const btn = this.el.getElementsByTagName('button')[0];
    if (btn) {
      btn.onclick = this._handleAdd;
      this.childrenParentNode = btn;
    }
  }

  appendChildren() {
    const contentWrapper = this.el.getElementsByClassName('content-wrapper')[0];
    if (contentWrapper) {
      const contentEl = new Content({
        props: { content: this.state.num },
        parentNode: this.el.getElementsByClassName('content-wrapper')[0],
      }).node;
    }
  }

  render() {
    console.log(this.state, this.el);

    return `
      <div class="wrapper">
        <button>
          ${this.state.num}
        </button>
        <div class="content-wrapper">
          ${this.children}
        </div>
      </div>
    `;
  }
}

// class App extends BasicNode {
//   render()
// }

const main = (parentNode) => (
  new Button({
    parentNode,
  }).node
);

main(RootNode);
