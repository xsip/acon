import { Db, MongoClient } from 'mongodb';
import { Aconize } from '../../acon.decorator';
import { AsyncConstructor } from '../../acon.interfaces';
import { a } from '../../acon.wrapper';

@Aconize()
class DbService implements AsyncConstructor<typeof DbService> {
  client!: MongoClient;
  private db!: Db;

  constructor(private url: string, dbName: string) {}

  async asyncConstructor(url: string, dbName: string): Promise<void> {
    this.client = new MongoClient(url);
    await this.client.connect();
    this.db = this.client.db(dbName);
  }

  async getAllFromCollection() {
    return this.db.collection('aconize').find({}).toArray();
  }
}

async function main() {
  const service = await a(DbService, 'mongodb ://localhost:27017', 'aconize');
  console.log(service);
}

main().then(console.log).catch(console.error);
