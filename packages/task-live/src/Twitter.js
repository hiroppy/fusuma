'use strict';

const twitter = require('twitter');

class Twitter {
  constructor({ keys }) {
    const { consumerKey, consumerSecret, accessTokenKey, accessTokenSecret } = keys;

    this.client = new twitter({
      consumer_key: consumerKey,
      consumer_secret: consumerSecret,
      access_token_key: accessTokenKey,
      access_token_secret: accessTokenSecret
    });

    this.sinceId = null;
  }

  async search(q) {
    return new Promise((resolve, reject) => {
      this.client.get(
        'search/tweets',
        { q, count: 30, since_id: this.sinceId },
        (err, { statuses, search_metadata }, res) => {
          if (err) {
            return reject(err);
          }

          const tweets = [];

          if (statuses) {
            statuses.forEach(({ user, text, id_str, created_at }, i) => {
              if (i == 0) {
                this.sinceId = id_str;
              }

              const { name, screen_name, profile_image_url_https } = user;

              tweets.push({
                id: id_str,
                name,
                text,
                platform: 'twitter',
                screenName: screen_name,
                avatar: profile_image_url_https,
                createdAt: new Date(created_at).getTime()
              });
            });
          }

          resolve(tweets);
        }
      );
    });
  }
}

module.exports = Twitter;
