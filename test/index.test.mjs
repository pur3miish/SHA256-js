import TestDirector from "test-director/TestDirector.mjs";

import sha256TestMjs from "./sha256.test.mjs";

const tests = new TestDirector();
sha256TestMjs(tests);
tests.run();
