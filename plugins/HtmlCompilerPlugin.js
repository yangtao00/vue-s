const fs = require('fs');
class HtmlCompilerPlugin {
  constructor(props) {
    this.templateDir = props.template;
    this.filenameDir = props.filename;
    this.params = props.params;
  }
  apply(compiler) {
    const self = this;
    compiler.hooks.emit.tapAsync('MyHtmlPlugin', (compilation, callback) => {
      fs.readFile(self.templateDir, (err, res) => {
        if (err) throw err;
        const reg = new RegExp(`{{\\s*(${Object.keys(self.params).join('|')})\\s*}}`, 'g');
        const html = res.toString().replace(reg, function(str, key, index) {
          return self.params[key];
        });
        fs.writeFile(self.filenameDir, html, function() {
          console.log('写入文件成功');
        });
        callback();
      })
    })
  }
}

module.exports = HtmlCompilerPlugin;