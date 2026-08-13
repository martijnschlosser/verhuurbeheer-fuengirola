import test from "node:test";
import assert from "node:assert/strict";
import { scoreOpportunity, actionFor } from "../src/scoring.js";

test("high-impression page-one query gets priority", () => {
  const high = scoreOpportunity({ impressions: 500, clicks: 2, position: 7 });
  const low = scoreOpportunity({ impressions: 2, clicks: 0, position: 60 });
  assert.ok(high > low);
  assert.equal(actionFor({ impressions: 500, clicks: 2, position: 7 }), "Verbeter title en meta description");
});
