'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    let data = await ctx.service.news.list()
    ctx.body = data;
    //await ctx.render('news.tpl', { list: data.items });
  }
}

module.exports = NewsController;
