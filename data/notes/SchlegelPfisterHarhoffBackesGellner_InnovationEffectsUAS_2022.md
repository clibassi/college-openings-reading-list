# Schlegel, Pfister, Harhoff, & Backes-Gellner (2022)

> Model-written summary (2026-11-24) of the paper's PDF: published version, Journal of Technology Transfer 47: 63–118 (accepted 15 December 2020; published online 5 February 2021; open access). Page citations below are PDF pages (journal page = PDF page + 62). Not checked against the paper by a person.

## File Name
SchlegelPfisterHarhoffBackesGellner_InnovationEffectsUAS_2022.pdf

## Paper Title
Innovation effects of universities of applied sciences: an assessment of regional heterogeneity

## Basic Information
- Authors: Tobias Schlegel, Curdin Pfister, Dietmar Harhoff, & Uschi Backes-Gellner
- Year: 2022 (published online 2021)
- Journal: The Journal of Technology Transfer, 47: 63–118
- Field: Economics of innovation and regional economics (JEL I23, O31, O32, R11)
- Subfield: Higher education institutions, patenting, agglomeration economies
- Study type: Quasi-experimental difference-in-differences with interactions (heterogeneous effects), municipality-level panel

## Objective and Contribution (100-150 words)
Earlier studies of new higher education institutions report average patent increases of 7 to 32 percent, mostly for academic universities (p. 2). This paper asks whether the innovation effect of Swiss universities of applied sciences (UASs), bachelor-granting three-year colleges that teach and conduct applied research, varies with a region's economic preconditions (p. 1). It tests three agglomeration-based preconditions: labor market size (matching), labor market density (learning) and high tech intensity (sharing) (pp. 3, 5). It also ranks their relative importance through a variance decomposition (p. 24). The contribution is threefold: evidence on an applied-research institution type, effect heterogeneity rather than an average, and municipality-level geography. Outcomes are patent priority filings and patent quality only; no other firm or labor-market outcomes are examined (p. 29).

## Methodology (200-300 words)
- **Data.** UAS campus timing and locations, extended from an earlier study to the French- and Italian-speaking regions (p. 9); Swiss business census employment and industry by municipality (waves 1995, 1998, 2001, 2005, 2008); and EPO PATSTAT patent priority filings, 1990–2010, localized by applicant ZIP code with fractional weights (pp. 9, 11).
- **Design.** Treated municipalities are within 25 km travel distance of a STEM UAS campus; all others are controls (p. 9). Preconditions are averages of the 1995 and 1998 census waves, split into quartiles (p. 10). The treatment indicator is lagged three years, the length of a bachelor's degree.
- **Identifying assumption.** Parallel trends in log patents between treated and control municipalities within each precondition quartile, plus quasi-random campus siting due to political considerations (pp. 8, 13).
- **Estimation.** The core specification (Eq. 2, p. 17) is
$$\ln(\text{patents}_{imt}+1)=\alpha+\beta\,\text{TG}_i+\gamma\,D_{i(t-3)}+\sum_{k=2}^{4}\delta_k\,D_{i(t-3)}\,Q_{ik}+\sum_{k=2}^{4}\kappa_k\,\text{TG}_i\,Q_{ik}+\sum_{k=2}^{4}\lambda_k\,Q_{ik}+\tau_t+\phi_m+\mu_{imt}$$
where $i$ is municipality, $m$ regional labor market (106), $\text{TG}_i$ the treatment-group dummy, $D_{i(t-3)}$ the three-year-lagged treatment dummy, $Q_{ik}$ the quartile-$k$ indicator of one precondition, $\tau_t$ year and $\phi_m$ labor-market fixed effects. $\gamma$ is the effect in quartile I and $\delta_k$ the extra effect in quartile $k$. Eq. (3) is an event study with eight leads and ten lags, binned at the ends; Eq. (4) includes all three preconditions jointly (pp. 18–19).
- **Inference.** Standard errors clustered at the regional labor market (Table 6 notes, p. 37).
- **Threats.** Non-random siting, differential trends by quartile, log(1 + patents) with many zeros, and a variance decomposition that is descriptive.

## Sample and Setting (150-200 words)
Switzerland after the mid-1990s federal reform creating UASs, which were established from 1997 to 2003 (p. 7). The analysis ends in 2008 because master's programs started afterwards (p. 8). Twenty-two STEM campuses (engineering, IT, life sciences) existed between 1997 and 2008 (p. 8; Table 4, p. 31). The sample covers 2,222 municipalities (updated to the 2018 municipal stock) grouped into 106 regional labor markets, years 1990–2008, with 42,218 observations in the main regressions (Table 6, p. 37). Forty-three percent of labor market regions contain both treated and control municipalities and another 36 percent contain only treated ones (p. 17). Before treatment (1990–1997), treated municipalities averaged 1.78 yearly priority filings and controls 0.74; after, 2.76 and 1.21 (Table 2, p. 12). Over 300,000 patent applications and over 80,000 priority filings are used (p. 10). In some places a UAS upgraded a former professional education and training college rather than creating a campus from nothing (p. 8). Most Swiss municipalities are small (p. 10).

## Main Findings (200-300 words)
**Effects appear only in the largest, densest or most high-tech places.** In labor market size quartile IV, treated municipalities have 0.16 higher log patents, or 17 percent, than untreated quartile IV municipalities (p. 20). The Table 6 interaction for quartile IV is 0.2225 (SE 0.0355) for size, 0.1813 (0.0345) for density and 0.1304 (0.0312) for high tech intensity, against a treatment dummy of –0.0603 (0.0151), –0.0582 (0.0160) and –0.0306 (0.0194) (p. 37). Lower quartiles show small, often negative or insignificant total effects.

**Thresholds.** Approximately 900 employees, 7 employees per hectare, or 6 percent high-tech employment is needed to profit (p. 21).

**Timing.** The effect for quartile IV in size starts about six years after establishment and stabilizes at roughly 10–18 percent higher patenting; high tech quartile IV shows no gain, while quartile III has positive but insignificant effects (p. 21).

**Relative importance.** Labor market size explains 0.0094, or 53.36 percent, of the 0.0176 variance of the treatment effect; density explains 3.77 percent and high tech intensity 8.02 percent (Table 8, p. 39). In the joint regression only size QIV (0.2014, SE 0.0452) is strongly significant; density QIV is 0.0014 and high tech QIV 0.0457* (Table 7, p. 38).

**Quality and robustness.** Patent quality shows similar patterns with smaller effects, and quartile III also benefits (p. 25). Results survive firm-based preconditions, municipal controls, dropping top deciles, leaving out each of the 22 campuses, and a treated-only design (pp. 26–27).

## Key Figures and Tables
**Table 1 — Economic preconditions by quartiles and treatment and control groups.** Shows balance of employment, density and high-tech share across treated and control municipalities, with a significant difference only in size quartile IV, driven by the four largest municipalities in the treated group. Dropping them does not change results. (p. 11)

**Table 2 — Number of patent priority filings before and after treatment for the treatment and control groups.** Treated municipalities start with higher filing levels (1.78 versus 0.74) but yearly changes are similar (0.10 versus 0.05 pre; 0.06 versus 0.03 post). The authors read this as no unconditional innovation effect. (p. 12)

**Table 3 — Parallel trends: estimated marginal effects for the treatment group per year and quartile.** Reports treatment-group-specific year effects by quartile for 1991–1999. The text calls them small and insignificant, but several cells are significant (for example, 0.0977*** for high tech QII in 1996). (pp. 15–16)

**Figure 1 — UAS campuses and treatment and control groups.** Map of the 22 campuses and 25 km treatment areas across 2,222 municipalities and 106 labor market regions. The map is not legible in the dump. (p. 10)

**Figure 2 — Distribution of average yearly changes in patent priority filings over economic preconditions.** Descriptive evidence that patent growth rises with size and density, especially in the top quartile. (p. 13)

**Figure 3 — Treatment effects for municipalities by quartile and economic precondition.** Plots $\gamma+\delta_k$ against same-quartile controls and $\delta_k$ against treated quartile I. This is the main result figure; coefficients are not legible in the dump and are read from Table 6. (p. 22)

**Figure 4 — Evolution of treatment effects over time by quartile and economic precondition.** Event studies by quartile, with leads and lags binned, base year the last pre-treatment year. They support no anticipation and a roughly six-year delay in quartile IV. (p. 23)

**Figure 5 — Variance of the treatment effect explained by economic preconditions.** Bar chart of the variance shares in Table 8. (p. 24)

**Table 6 — Main analysis: results for patent priority filings on labor market size, high-tech intensity and labor market density.** Full coefficients for Eq. (2); columns are size, density, then high tech intensity despite the title order. (p. 37)

**Table 8 — Main analysis: decomposition of variance of the treatment effect by economic precondition.** Size 53.36 percent; covariance terms with high tech and density 16.01 and 14.97 percent. No standard errors are given for the shares. (p. 39)

## Critical Analysis (300-400 words)
Descriptively, the finding is clear: after UAS openings, patenting rises in large, dense municipalities and not elsewhere. The causal reading depends on quasi-random siting and parallel trends. The siting argument is documented from historical sources and stems from an earlier study (p. 8), but in places a UAS upgraded an existing college, so treatment is not always new capacity. The preconditions are not randomly assigned, so the heterogeneity result is conditional on size, which proxies for many correlated urban characteristics. A claim that agglomeration "causes" larger effects is therefore weaker than the average-effect claim.

On parallel trends, the text says treatment-group trends are small and insignificant for all quartiles (p. 14), but Table 3 prints several significant cells (for example, 0.0731** for density QII in 1996, 0.0977*** for high tech QII in 1996, and 0.0822** for density QIII in 1995). The event study also finds significant leads in quartile II (p. 21). Together with a flat but noisy quartile IV pattern, this is moderate support at best. The treated-only specification (p. 27) is a useful partial check against up-and-coming regions.

Measurement is a further concern. The outcome is OLS on log(patents + 1), with many zero municipality-years, which can make estimates sensitive to units. The negative treatment dummy of about –0.06 in low quartiles is read as an absolute change near zero (p. 20) but is not further probed. Treated and control units sit inside the same labor markets and 25 km buffers, so spillovers into controls would bias effects toward zero. The variance decomposition is mechanical, depends on collinear quartile definitions, and has no inference.

Transfer to two-year college openings and local firms, industry mix and innovation: the heterogeneity design transfers well, because community college effects likely differ between large urban labor markets and small ones, and interacting treatment with pre-period size, density and sector share is directly implementable. The 25 km commuting-based radius and three-year lag (a two-year lag may suit associate programs) are portable. What does not transfer is the outcome and institution: UAS graduates come from vocational tracks and the campuses do applied research, whereas U.S. community college openings produce few patents, so outcomes such as establishment counts and employment by industry are more suitable. The authors themselves flag that firm and employment outcomes are unexamined (p. 29).

## Research Gaps and Future Directions
- Effects on other regional outcomes such as firm counts, employment, productivity or GDP (p. 29).
- UASs teaching non-STEM fields, for which patents are a poor measure (p. 29).
- Data on UAS size (students, professors, budget) and its evolution, since treatment is binary (p. 29).
- A comparable analysis of academic universities and complementarities with UASs, not possible because too few were established in the period (p. 30).
- Not addressed in this version: formal inference for the variance shares and sensitivity to the log(1 + patents) transformation.

## Implications and Future Research (100-150 words)
The paper's policy message is that applied-research institutions yield innovation effects mainly where labor markets are already large, dense or high-tech, creating an efficiency-versus-equity trade-off for siting (p. 30). For studies of community or technical college openings, the practical lesson is to estimate heterogeneity by pre-opening local labor market size and industry structure and not to rely on pooled averages, which here would hide a null in most municipalities and positive effects in a minority. The quality results suggest that quantity gains are not offset by lower quality (p. 25). Future work should pair this design with establishment-level and inventor microdata, test whether graduate retention and matching explain the size gradient, and use stronger staggered-adoption estimators than quartile-interacted two-way fixed effects.

## Keywords/Tags
#universities-of-applied-sciences #patents #regional-heterogeneity #agglomeration-economies #difference-in-differences #switzerland #labor-market-size #higher-education-expansion #jel-i23 #jel-o31

## Related Papers
[[Pfister, Koomen, Harhoff, & Backes-Gellner (2021)]] The earlier UAS study this paper builds on, reconstructing the quasi-random establishment history; it reports average patent quantity and quality gains of 13% and 11% (p. 4).
[[Lehnert, Pfister, & Backes-Gellner (2020)]] Cited for UASs raising the share of R&D personnel in local firms (p. 2), a firm-side channel relevant to the mechanism here.
[[Toivanen & Väänänen (2016)]] Cited for Finnish new technical universities, estimated to raise patents by 20% for three institutions (p. 4); the average-effect benchmark.
[[Kantor & Whalley (2014)]] Cited for innovation effects 20% to 100% higher for firms in industries sharing labor markets with universities (p. 6), the labor-market-matching logic behind this paper's size result.
[[Lehnert, Dell, Backes-Gellner, & Bettinger (2024)]] Cites this paper under firm development effects of new institutions and studies U.S. branch campuses with a GDP proxy, a contrasting outcome and geography.
