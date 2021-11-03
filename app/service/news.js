'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    //const data = await this.ctx.db.query('select * from news');
    const res = await this.ctx.curl(`https://api.github.com/search/repositories?q=language:javascript&sort=stars&page=1&order=desc`, {
      dataType: 'json'
    });
    return res.data;
  }
}

module.exports = NewsService;