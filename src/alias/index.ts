import path from 'path';
import moduleAlias from 'module-alias';

const src = path.resolve(__dirname, '..');

moduleAlias.addAliases({
    '@src': src,
    '@dao': path.resolve(src, 'dao'),
    '@app': path.resolve(src, '..', 'app'),
});

moduleAlias();